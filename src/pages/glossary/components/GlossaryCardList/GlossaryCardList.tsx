import { useState, useEffect } from "react";
import { getDataGlossary } from "../../../../services/axios/axios";
import { GlossaryCard } from "./GlossaryCard";
import styled from "styled-components";

const GlossaryCardListContainer = styled.div`
  padding: 32px 16px;
  box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const GlossaryCardList = () => {
  const [glossaryData, setGlossaryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDataGlossary();
      if (data) {
        setGlossaryData(data);
      }
    };

    fetchData();
  }, []);

  function getUniqueLetters(data) {
    const lettersSet = new Set();
    data.forEach((cardData) => {
      const firstLetter = cardData.term.charAt(0).toUpperCase();
      lettersSet.add(firstLetter);
    });
    return Array.from(lettersSet).sort();
  }

  return (
    <GlossaryCardListContainer>
      {getUniqueLetters(glossaryData).map((letter) => (
        <GlossaryCard
          key={letter}
          letter={letter}
          cardData={glossaryData.filter(
            (cardData) => cardData.term.charAt(0).toUpperCase() === letter
          )}
        />
      ))}
    </GlossaryCardListContainer>
  );
};
