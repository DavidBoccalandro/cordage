import { GlossaryCard } from "./GlossaryCard";

export const GlossaryCardList = () => {
  return (
    <div>
      {/* Título de la lista */}
      <h2>Título de la Lista</h2>
      {/* Divider */}
      <hr />
      {/* Lista de tarjetas */}
      <div>
        {/* Tarjetas del glosario */}
        <GlossaryCard />
        <GlossaryCard />
        {/* ... más tarjetas del glosario ... */}
      </div>
    </div>
  );
}
