import { createContext } from 'react';
import { ResponseItem } from '../services/glossary.interface';

export const glossaryContext = createContext<{ glossary: Map<string, ResponseItem[]> | undefined }>({
	glossary: undefined,
});
