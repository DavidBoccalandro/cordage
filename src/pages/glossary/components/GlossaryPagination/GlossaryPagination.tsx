import styled from 'styled-components';

const GlossaryPaginationContainer = styled.ul`
	position: sticky;
	top: 0;
	display: flex;
	justify-content: center;
	margin-bottom: 24px;
	list-style: none;
	background-color: var(--slate50);
`;

const LetterContainer = styled.li`
	width: 36px;
	height: 36px;
	border: none;
	border-radius: 50%;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--slate50);

	a {
		text-decoration: none;
		font-weight: 700;
		font-size: 14px;
		line-height: 19px;
		color: var(--neutral500);
	}

	&.active {
		background: var(--orange600);

		a {
			color: var(--white);
		}
	}

	&.disabled {
		opacity: 0.5;
		pointer-events: none;
	}

	&:hover:not(.active) {
		background: var(--orange200);

		a {
			color: var(--neutral400);
		}
	}
`;

interface IGlossaryPaginationProps {
	alphabet: string[];
	activeLetter: string | null;
	handleClick: (letter: string) => void;
	enabledLetters: string[];
}

export const GlossaryPagination = ({
	alphabet,
	activeLetter,
	handleClick,
	enabledLetters,
}: IGlossaryPaginationProps) => {

	return (
		<GlossaryPaginationContainer>
			{alphabet.map((letter: string) => (
				<LetterContainer
					className={`${activeLetter === letter ? 'active' : ''} ${!enabledLetters.includes(letter) ? 'disabled' : ''}`}
					onClick={() => handleClick(letter)}
					key={`letter-${letter}`}
				>
					<a>{letter}</a>
				</LetterContainer>
			))}
		</GlossaryPaginationContainer>
	);
};
