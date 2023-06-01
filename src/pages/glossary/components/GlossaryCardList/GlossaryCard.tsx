import styled from 'styled-components';
import { GlossaryTerm } from './GlossaryTerm';
import { Element } from 'react-scroll';
import { ResponseItem } from '../../../../services/glossary.interface';

const GlossaryCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
`;

const GlossaryCardLetter = styled.div`
	padding: 0 8px;
	width: 38px;
	height: 41px;

	span {
		font-family: 'Lora';
		font-style: normal;
		font-weight: 700;
		font-size: 32px;
		line-height: 41px;
		color: var(--neutral800);
		margin: 8px 16px;
	}

	&.active-card span {
		color: var(--orange600);
	}
`;

const GlossaryTermsContainer = styled.div`
	column-count: 4;
	gap: 16px;
`;

interface IGlossaryCardProps {
	cardData: ResponseItem[] | undefined;
	letter: string;
	activeLetter: string | null;
}

export const GlossaryCard = ({ cardData, letter, activeLetter }: IGlossaryCardProps) => {
	return (
		<GlossaryCardContainer>
			<Element key={letter} name={letter}>
				<GlossaryCardLetter
					id={`title-${letter}`}
					className={activeLetter === letter ? 'active-card' : 'inactive-card'}
				>
					<span>{letter}</span>
				</GlossaryCardLetter>
				<GlossaryTermsContainer>
					{cardData?.map((item) => (
						<GlossaryTerm key={item.id} termDefinition={item} />
					))}
				</GlossaryTermsContainer>
			</Element>
		</GlossaryCardContainer>
	);
};
