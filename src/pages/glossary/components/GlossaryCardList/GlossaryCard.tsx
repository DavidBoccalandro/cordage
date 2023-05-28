import styled from "styled-components";
import { GlossaryTerm } from "./GlossaryTerm";

const GlossaryCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`

const GlossaryCardLetter = styled.span`
  margin: 0 8px;
`

const GlossaryTermsContainer = styled.div`
  display: flex;
  gap: 16px;
`

export const GlossaryCard = ({ terms }) => {
  return (
    <GlossaryCardContainer>
      <GlossaryCardLetter>A</GlossaryCardLetter>
      <GlossaryTermsContainer>
        {
          terms.map((term: string) => {
            <GlossaryTerm>{term}</GlossaryTerm>
          })
        }
      </GlossaryTermsContainer>
    </GlossaryCardContainer>
  );
}
