import { useState, useEffect, useContext } from 'react';
import { GlossaryCardList, GlossaryHero, GlossaryPagination, GlossaryTermDefinition } from './components';
import { ResponseItem } from '../../services/glossary.interface';
import { glossaryContext } from '../../context/glossaryContext';

export const Glossary = () => {
	const [activeLetter, setActiveLetter] = useState<string | null>(null);
	const [glossaryState, setGlossaryState] = useState<Map<string, ResponseItem[]>>();
	const [searchInput, setSearchInput] = useState<string>('');
	const { glossary } = useContext(glossaryContext);

	useEffect(() => {
		setGlossaryState(glossary);
		createFilterState();
		setActiveLetter(null);
	}, [searchInput, glossary]);

	function handlePaginationHandleClick(letter: string) {
		setActiveLetter(letter);
	}

	function createFilterState() {
		if (!glossary) return;

		if (searchInput === '') {
			setGlossaryState(glossary);
			return;
		}

		const filteredGlossary = new Map<string, ResponseItem[]>();

		for (const [letter, items] of glossary.entries()) {
			const filteredItems = items.filter((item) => item.term.toLowerCase().includes(searchInput.toLowerCase()));
			filteredGlossary.set(letter, filteredItems);
		}

		setGlossaryState(filteredGlossary);
	}

	return (
		<>
			<GlossaryHero setSearchInput={setSearchInput} />
			{glossaryState?.keys() ? (
				<>
					<GlossaryPagination
						alphabet={glossary ? Array.from(glossary.keys()) : []}
						activeLetter={activeLetter}
						handleClick={handlePaginationHandleClick}
						disabledLetters={
							glossary ? Array.from(glossary.keys()).filter((letter) => !glossary.get(letter)?.length) : []
						}
					/>
					<GlossaryCardList glossary={glossaryState} />
				</>
			) : (
				'Loading...'
			)}
		</>
	);
};
