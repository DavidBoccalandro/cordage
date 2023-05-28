import { GlossaryCardList, GlossaryHero, GlossaryPagination } from "./components";

export const Glossary = () => {
  return (
    <div>
      <GlossaryHero />
      <GlossaryPagination />
      <GlossaryCardList />
    </div>
  );
};
