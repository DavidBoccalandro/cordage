import './App.css'
import AppRouter from './router/App.router'
import { useState, useEffect, useCallback } from 'react';
import { glossaryContext } from './context/glossaryContext'
import { glossaryService } from './services/glossaryService.service';
import { ResponseItem } from './services/glossary.interface';
import { createGlossaryMap } from './utils/glossaryMap.constant';

function App() {
  const [glossary, setGlossary] = useState<Map<string, ResponseItem[]> | undefined>();
  const buildGlossary = useCallback((data: ResponseItem[]) => {
    const copyGlossaryMap = createGlossaryMap();

    data.forEach((item) => {
      const firstLetter = item.term.charAt(0).toUpperCase();
      if (!copyGlossaryMap.has(firstLetter)) {
        copyGlossaryMap.set(firstLetter, []);
      }
      copyGlossaryMap.get(firstLetter).push(item);
    });
    setGlossary(copyGlossaryMap);
  }, []);
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
    <glossaryContext.Provider value={{ glossary }}>
      <AppRouter />
    </glossaryContext.Provider>
  )
}

export default App
