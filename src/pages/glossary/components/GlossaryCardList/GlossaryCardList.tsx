import { GlossaryCard } from "./GlossaryCard";
import styled from "styled-components";
import { Divider } from "../../../../components";
import { ResponseItem } from "../../../../services/glossary.interface";

const GlossaryCardListContainer = styled.div`
  width: 1068px;
  margin: 0 auto 24px auto;
  padding: 32px 16px;
  box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

interface IGlossaryCardListProps {
  glossary: Map<string, ResponseItem[]>,
}

export const GlossaryCardList = ({ glossary }: IGlossaryCardListProps) => {
  const letters = Array.from(glossary.keys()) as string[];
  const availableLetters = letters.filter((letter) => glossary.get(letter)?.length);

  return (
    <GlossaryCardListContainer>
      {
        availableLetters.map((letter, index) => (
          <div key={`container-${letter}`}>
            <GlossaryCard
              key={`card-${letter}`}
              letter={letter}
              cardData={glossary.get(letter)}
            />
            {index !== availableLetters.length - 1 && <Divider key={`divider-${letter}`} />}
          </div>
        ))
      }
    </GlossaryCardListContainer>
  );
};
