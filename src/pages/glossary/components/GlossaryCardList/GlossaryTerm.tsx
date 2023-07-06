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
	margin: 4px 0;
	overflow: hidden;
	text-overflow: ellipsis;

	:hover {
		background: var(--gray100);
		border-radius: 8px;
		cursor: pointer;
	}
`;

function getNodePositionRelativeToDocument(node: any) {
	let position = 0;
	while (node) {
		position += node.offsetTop;
		node = node.offsetParent;
	}
	return position;
}

interface IGlossaryTermProps {
	termDefinition: ResponseItem;
}

export const GlossaryTerm = ({ termDefinition }: IGlossaryTermProps) => {
	const [showTermDefinition, setShowTermDefinition] = useState(false);
	const [termCoordinates, setTermCoordinates] = useState({ left: 0, right: 0, yPos: 0, height: 0 });
	const [hasEnoughXSpace, setHasEnoughXSpace] = useState(true);
	const [hasEnoughYSpace, setHasEnoughYSpace] = useState(true);

	const handleOpenTermDefinition = (e: any) => {
		const rect = e.target.getBoundingClientRect();
		const { left, right, bottom, height } = rect;
		const yPos = getNodePositionRelativeToDocument(e.target);
		console.log(yPos)
		setTermCoordinates({ left, right, yPos, height });
		const rectMinusXPadding = left - 16;
		const rectMinusYPadding = bottom + 8;
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
				{termDefinition.term}
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
