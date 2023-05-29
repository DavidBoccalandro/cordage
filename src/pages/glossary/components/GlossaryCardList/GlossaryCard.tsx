import styled from "styled-components";

const GlossaryCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const GlossaryCardLetter = styled.div`
  padding: 0 8px;
  width: 41px;
  height: 41px;

  span {
    font-family: 'Lora';
    font-weight: 700;
    font-size: 32px;
    line-height: 41px;
    color: #262626;
  }
`;

const GlossaryTermsContainer = styled.div`
  column-count: 4;
  column-gap: 16px;
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
              <div key={term.id}>
                <h3>{term.term}</h3>
              </div>
            ))}
          </GlossaryTermsContainer>
        </>
      ))}
    </GlossaryCardContainer>
  );
};