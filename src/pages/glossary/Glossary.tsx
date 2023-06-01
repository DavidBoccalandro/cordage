import { useState, useEffect, useContext, useCallback } from 'react';
import { GlossaryCardList, GlossaryHero, GlossaryPagination } from './components';
import { ResponseItem } from '../../services/glossary.interface';
import { glossaryContext } from '../../context/glossaryContext';
import { debounce } from 'lodash';

export const Glossary = () => {
	const [activeLetter, setActiveLetter] = useState<string>('A');
	const [glossaryState, setGlossaryState] = useState<Map<string, ResponseItem[]>>();
	const { glossary } = useContext<{ glossary: Map<string, ResponseItem[]> | undefined }>(glossaryContext);
	const createFilterState = useCallback(
		(searchString: string) => {
			if (!glossary) return;

			if (searchString === '') {
				setActiveLetter('A');
				setGlossaryState(glossary);
				return;
			}

			const filteredGlossary = new Map<string, ResponseItem[]>();

			for (const [letter, items] of glossary.entries()) {
				const filteredItems = items.filter((item) => item.term.toLowerCase().includes(searchString.toLowerCase()));

				if (filteredItems.length) {
					filteredGlossary.set(letter, filteredItems);
				}
			}

			setActiveLetter(filteredGlossary.keys().next().value);
			setGlossaryState(filteredGlossary);
		},
		[glossary]
	);
	const debouncedGlossaryFilter = debounce(createFilterState, 1000);
	const startSearch = useCallback(
		(searchValue: string) => {
			debouncedGlossaryFilter(searchValue);
		},
		[debouncedGlossaryFilter]
	);
	useEffect(() => {
		setGlossaryState(glossary);
		setActiveLetter('A');
		createFilterState('');
	}, [glossary, createFilterState]);

	function handlePaginationClick(letter: string) {
		setActiveLetter(letter);
	}

	return (
		<>
			<GlossaryHero startSearch={startSearch} />
			{glossaryState?.keys() ? (
				<>
					<GlossaryPagination
						alphabet={glossary ? Array.from(glossary.keys()) : []}
						activeLetter={activeLetter}
						handleClick={handlePaginationClick}
						disabledLetters={
							glossary ? Array.from(glossary.keys()).filter((letter) => !glossary.get(letter)?.length) : []
						}
					/>
					<GlossaryCardList glossary={glossaryState} activeLetter={activeLetter} />
				</>
			) : (
				'Loading...'
			)}
		</>
	);
};
