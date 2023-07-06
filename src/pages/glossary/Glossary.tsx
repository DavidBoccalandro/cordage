import { useState, useEffect, useContext, useCallback } from 'react';
import { GlossaryCardList, GlossaryHero, GlossaryPagination } from './components';
import { ResponseItem } from '../../services/glossary.interface';
import { glossaryContext } from '../../context/glossaryContext';
import { debounce } from 'lodash';
import { animateScroll as scroll } from 'react-scroll';

export const Glossary = () => {
	const [activeLetter, setActiveLetter] = useState<string>('A');
	const [glossaryState, setGlossaryState] = useState<Map<string, ResponseItem[]>>();
	const [availableLetters, setAvailableLetters] = useState<string[]>([])
	const { glossary } = useContext<{ glossary: Map<string, ResponseItem[]> | undefined }>(glossaryContext);

	const getAvailableLetters = useCallback((updatedGlossary: Map<string, ResponseItem[]>) => {
		const availableLetters: (string | undefined)[] = Array.from(updatedGlossary.keys()).map((letter) => {
			if (updatedGlossary.get(letter)?.length) {
				return letter;
			}
			return undefined;
		}).filter(l => l);

		setAvailableLetters(availableLetters as string[]);
	}, []);

	const createFilterState = useCallback(
		(searchString: string) => {
			if (!glossary) return;

			if (searchString === '') {
				setActiveLetter('A');
				setGlossaryState(glossary);
				getAvailableLetters(glossary);
				return;
			}

			const filteredLetters = [];
			const filteredGlossary = new Map<string, ResponseItem[]>();

			for (const [letter, items] of glossary.entries()) {
				const filteredItems = items.filter((item) => item.term.toLowerCase().includes(searchString.toLowerCase()));

				if (filteredItems.length) {
					filteredGlossary.set(letter, filteredItems);
					filteredLetters.push(letter);
				}
			}

			setActiveLetter(filteredGlossary.keys().next().value);
			getAvailableLetters(filteredGlossary);
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
		if (glossary) {
			setGlossaryState(glossary);
			getAvailableLetters(glossary);
		}
	}, [glossary]);

	const handleClickScroll = (letter: string) => {
		setActiveLetter(letter);
		const element = document.getElementById(`title-${letter}`);
		const headerOffset = 90;

		if (element) {
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

			scroll.scrollTo(offsetPosition, {
				duration: 1000,
				delay: 0,
				smooth: 'easeInOutQuart'
			});
		}
	};


	return (
		<>
			<GlossaryHero startSearch={startSearch} />
			{glossaryState?.keys() ? (
				<>
					<GlossaryPagination
						alphabet={glossary ? Array.from(glossary.keys()) : []}
						activeLetter={activeLetter}
						handleClick={handleClickScroll}
						enabledLetters={availableLetters}
					/>
					<GlossaryCardList glossary={glossaryState} activeLetter={activeLetter} />
				</>
			) : (
				<h1>
					Loading...
				</h1>
			)}
		</>
	);
};
