import { useState, useEffect } from "react";
import axios from "axios";
import { GlossaryCard } from "./GlossaryCard";

export const GlossaryCardList = () => {
  const [glossaryData, setGlossaryData] = useState([]);

  useEffect(() => {
    // Lógica para obtener los datos de la API
    const fetchData = async () => {
      try {
        const response = await axios.get('../../../../../server/dataGlossaryTT.json');
        setGlossaryData(response.data);
      } catch (error) {
        console.error("Error al obtener los datos del glosario:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {glossaryData.map((cardData) => (
        console.log(cardData),
        <GlossaryCard key={cardData.glossary_term_id} terms={cardData.glossary_sets} />
      ))}
    </div>
  );
};
