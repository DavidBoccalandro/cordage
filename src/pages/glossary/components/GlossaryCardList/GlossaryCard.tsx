import styled from "styled-components";
import { GlossaryTerm } from "./GlossaryTerm";

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
`;

const GlossaryTermsContainer = styled.div`
  column-count: 4;
  gap: 16px;
`;

export const GlossaryCard = ({ cardData }) => {
  const termsByLetter = groupTermsByLetter(cardData);

  function groupTermsByLetter(data) {
    const termsByLetter = {};

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const card = data[key];
        const firstLetter = card.term.charAt(0).toUpperCase();

        if (termsByLetter.hasOwnProperty(firstLetter)) {
          termsByLetter[firstLetter].push(card);
        } else {
          termsByLetter[firstLetter] = [card];
        }
      }
    }

    return termsByLetter;
  }

  return (
    <GlossaryCardContainer>
      {Object.entries(termsByLetter).map(([letter, letterTerms]) => (
        <>
          <GlossaryCardLetter>
            <span>{letter}</span>
          </GlossaryCardLetter>
          <GlossaryTermsContainer>
            {letterTerms.map((term) => (
              <GlossaryTerm key={term.id}>
                <span>{term.term}</span>
              </GlossaryTerm>
            ))}
          </GlossaryTermsContainer>
        </>
      ))}
    </GlossaryCardContainer>
  );
};