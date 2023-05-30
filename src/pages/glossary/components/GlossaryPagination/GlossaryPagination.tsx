import { Link } from 'react-scroll';
import styled from 'styled-components';

const GlossaryPaginationContainer = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  margin-bottom: 24px;

  button.active {
    background: var(--orange600);
    color: var(--white);
  }
`;

const LetterContainer = styled.button`
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background-color: var(--slate50);
`;

interface IGlossaryPaginationProps {
  alphabet: string[],
  activeLetter: string | null,
  handleClick: (letter: string) => void,
}

export const GlossaryPagination = ({ alphabet, activeLetter, handleClick }: IGlossaryPaginationProps) => {
  return (
    <GlossaryPaginationContainer>
      {alphabet.map((letter: string) => (
        <Link key={`link-${letter}`} to={letter} spy={true} smooth={true} offset={50} duration={500}>
          <LetterContainer
            className={activeLetter === letter ? 'active' : ''}
            onClick={() => handleClick(letter)}
            key={`letter-${letter}`}
          >
            {letter}
          </LetterContainer>
        </Link>
      ))}
    </GlossaryPaginationContainer>
  );
};
