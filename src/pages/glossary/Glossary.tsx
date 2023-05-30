import { useState, useEffect, useCallback } from "react";
import { GlossaryCardList, GlossaryHero, GlossaryPagination, GlossaryTermDefinition } from "./components";
import { glossaryService } from "../../services/glossaryService.service";
import { createGlossaryMap } from "../../utils/glossaryMap.constant";
import { ResponseItem } from "../../services/glossary.interface";

export const Glossary = () => {
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const [glossaryState, setGlossaryState] = useState<Map<string, ResponseItem[]>>();
  const buildGlossary = useCallback((data: ResponseItem[]) => {
    const copyGlossaryMap = createGlossaryMap();

    data.forEach((item) => {
      const firstLetter = item.term.charAt(0).toUpperCase();
      if (!copyGlossaryMap.has(firstLetter)) {
        copyGlossaryMap.set(firstLetter, []);
      }
      copyGlossaryMap.get(firstLetter).push(item);
    });
    setGlossaryState(copyGlossaryMap);
  }, []);

  function handlePaginationHandleClick(letter: string) {
    setActiveLetter(letter);
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await glossaryService();
      if (data) {
        buildGlossary(data);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <GlossaryHero />
      {
        glossaryState?.keys() ?
          (
            <>
              <GlossaryPagination
                alphabet={Array.from(glossaryState?.keys())}
                activeLetter={activeLetter}
                handleClick={handlePaginationHandleClick}
              />
              <GlossaryCardList
                glossary={glossaryState}
              />
              <GlossaryTermDefinition />
            </>
          ) : 'Loading...'
      }
    </>
  );
};
