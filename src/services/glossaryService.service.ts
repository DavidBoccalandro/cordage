import axios from 'axios';
import { ResponseItem } from './glossary.interface';

export const glossaryService = async (): Promise<ResponseItem[] | null> => {
	try {
		const response = await axios.get('/assets/data/dataGlossaryTT.json');
		return response.data;
	} catch (error) {
		console.error('Error getting glossary data:', error);
		return null;
	}
};
