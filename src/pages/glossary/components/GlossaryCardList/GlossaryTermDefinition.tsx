import styled, { keyframes } from 'styled-components';
import EditIcon from '/src/assets/icons/EditIcon.svg';
import DeleteIcon from '/src/assets/icons/DeleteIcon.svg';
import { ResponseItem } from '../../../../services/glossary.interface';

const BackDrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: transparent;
`;

const termDefinitionEnter = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const TermDefinitionContainer = styled.div<{
	modalPosition: { left: number; height: number; right: number; yPos: number };
	hasEnoughXSpace: boolean;
	hasEnoughYSpace: boolean;
}>`
	position: absolute;
	display: flex;
	flex-direction: column;
	width: 526px;
	max-height: 370px;
	background: var(--white);
	border-radius: 8px;
	box-shadow: 0px 8px 10px -6px #0000001a;
	padding: 16px 24px 24px 24px;
	gap: 16px;
	z-index: 7;
	left: ${({ modalPosition, hasEnoughXSpace }) => hasEnoughXSpace && `${modalPosition.left}px;`};
	right: ${({ modalPosition, hasEnoughXSpace }) => !hasEnoughXSpace && `${window.innerWidth - modalPosition.right}px`};
	top: ${({ modalPosition, hasEnoughYSpace }) => hasEnoughYSpace && `${modalPosition.yPos + modalPosition.height + 8}px`};
	bottom: ${({ modalPosition, hasEnoughYSpace }) => {
		if (hasEnoughYSpace) return;
		const result = modalPosition.yPos - window.innerHeight;
		return `${(result * -1) + 8}px;`;
	}};

	animation: ${termDefinitionEnter} 300ms ease-in;
`;

const TermDefinitionHeader = styled.div`
display: flex;
flex-direction: column;
gap: 8px;

	.header-title {
	display: flex;
	justify-content: space-between;
	margin-top: 4px;

		h2 {
		font-weight: 700;
		font-size: 24px;
		line-height: 32px;
		margin-top: 2px;
	}

	div.edition-buttons img {
		cursor: pointer;

			&:focus-visible,
			&:hover {
			opacity: 0.8;
		}

			&:active {
			opacity: 1;
		}
	}
}

	.header-badge {
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	color: var(--neutral500);
}
`;

const TermDefinitionBody = styled.div`
	font-weight: 400;
	font-size: 16px;
	line-height: 22px;
	color: var(--neutral800);
`;

const TermDefinitionFooter = styled.div`
	display: flex;
	flex-direction: column;
	font-weight: 400;
	font-size: 16px;
	line-height: 22px;
	color: var(--neutral800);

	span.definition-by {
		color: var(--blue500);
		font-weight: 5 00;
	}
`;

interface IGlossaryTermDefinition {
	selectedTerm: ResponseItem;
	termCoordinates: { left: number; height: number; right: number; yPos: number };
	handleCloseTermDefinition: () => void;
	hasEnoughXSpace: boolean;
	hasEnoughYSpace: boolean;
}

export const GlossaryTermDefinition = ({
	selectedTerm,
	termCoordinates,
	handleCloseTermDefinition,
	hasEnoughXSpace,
	hasEnoughYSpace,
}: IGlossaryTermDefinition) => {
	return (
		<>
			<BackDrop onClick={() => handleCloseTermDefinition()}></BackDrop>
			<TermDefinitionContainer
				modalPosition={termCoordinates}
				hasEnoughXSpace={hasEnoughXSpace}
				hasEnoughYSpace={hasEnoughYSpace}
			>
				<TermDefinitionHeader>
					<div className="header-title">
						<h2>{selectedTerm.term}</h2>
						<div className="edition-buttons">
							<img src={EditIcon} alt="Edit Icon" />
							<img src={DeleteIcon} alt="Delete Icon" />
						</div>
					</div>
					<div className="header-badge">
						{selectedTerm?.glossary_sets.map((set, index) => (
							<div key={`${Date.now()}-${index}-${set.id}`}>
								<span>
									{set.icon} {set.name}
								</span>
							</div>
						))}
					</div>
				</TermDefinitionHeader>
				<TermDefinitionBody>
					<p>{selectedTerm.definition}</p>
				</TermDefinitionBody>
				<TermDefinitionFooter>
					<span>Definition by</span>
					<span className="definition-by">{selectedTerm.definition_by}</span>
				</TermDefinitionFooter>
			</TermDefinitionContainer>
		</>
	);
};
