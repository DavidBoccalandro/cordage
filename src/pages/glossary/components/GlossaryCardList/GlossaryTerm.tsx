import { useState } from 'react';
import styled from 'styled-components';
import { ResponseItem } from '../../../../services/glossary.interface';
import { GlossaryTermDefinition } from '.';

const GlossaryTermContainer = styled.div`
	font-weight: 400;
	font-size: 16px;
	line-height: 20px;
	color: var(--neutral800);
	padding: 8px 16px;
	white-space: nowrap;

	p {
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;

interface IGlossaryTermProps {
	termDefinition: ResponseItem;
}

export const GlossaryTerm = ({ termDefinition }: IGlossaryTermProps) => {
	const [showTermDefinition, setShowTermDefinition] = useState(false);
	const [termCoordinates, setTermCoordinates] = useState();
	const [hasEnoughXSpace, setHasEnoughXSpace] = useState(true);
	const [hasEnoughYSpace, setHasEnoughYSpace] = useState(true);

	const handleOpenTermDefinition = (e) => {
		const rect = e.target.getBoundingClientRect();
		setTermCoordinates({ left: rect.left, top: rect.top, right: rect.right, bottom: rect.bottom });
		const rectMinusXPadding = rect.left - 16;
		const rectMinusYPadding = rect.bottom - 8;
		const remainingXSpace = window.innerWidth - rectMinusXPadding;
		const remainingYSpace = window.innerHeight - rectMinusYPadding;

		if (remainingXSpace < 526) {
			setHasEnoughXSpace(false);
		} else {
			setHasEnoughXSpace(true);
		}

		if (remainingYSpace < 370) {
			setHasEnoughYSpace(false);
		} else {
			setHasEnoughYSpace(true);
		}
		setShowTermDefinition((showTermDefinition) => !showTermDefinition);
	};

	const handleCloseTermDefinition = () => {
		setShowTermDefinition(false);
	};

	return (
		<>
			<GlossaryTermContainer onClick={handleOpenTermDefinition}>
				<p>{termDefinition.term}</p>
			</GlossaryTermContainer>
			{showTermDefinition && (
				<GlossaryTermDefinition
					handleCloseTermDefinition={handleCloseTermDefinition}
					selectedTerm={termDefinition}
					termCoordinates={termCoordinates}
					hasEnoughXSpace={hasEnoughXSpace}
					hasEnoughYSpace={hasEnoughYSpace}
				/>
			)}
		</>
	);
};
