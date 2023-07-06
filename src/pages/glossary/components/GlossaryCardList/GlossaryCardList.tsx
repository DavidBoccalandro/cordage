import { GlossaryCard } from './GlossaryCard';
import styled from 'styled-components';
import { Divider } from '../../../../components';
import { ResponseItem } from '../../../../services/glossary.interface';

const GlossaryCardListContainer = styled.div`
	width: 1068px;
	margin: 0 auto 24px auto;
	padding: 32px 16px;
	box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.1);
	border-radius: 8px;
	background: white;

	h1.no-results {
		text-align: center;
	}
`;

interface IGlossaryCardListProps {
	glossary: Map<string, ResponseItem[]>;
	activeLetter: string | null;
}

export const GlossaryCardList = ({ glossary, activeLetter }: IGlossaryCardListProps) => {
	const letters = Array.from(glossary.keys()) as string[];
	const availableLetters = letters.filter((letter) => glossary.get(letter)?.length);

	return (
		<GlossaryCardListContainer>
			{availableLetters.length ? (
				availableLetters.map((letter, index) => (
					<div key={`container-${letter}`}>
						<GlossaryCard
							key={`card-${letter}`}
							activeLetter={activeLetter}
							letter={letter}
							cardData={glossary.get(letter)}
						/>
						{index !== availableLetters.length - 1 && <Divider key={`divider-${letter}`} />}
					</div>
				))
			) : (
				<h1 className="no-results">No results found</h1>
			)}
		</GlossaryCardListContainer>
	);
};
