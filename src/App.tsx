import './App.css';
import AppRouter from './router/App.router';
import { glossaryContext } from './context/glossaryContext';
import { useGlossary } from './hooks/useGlossary';

function App() {
	const { glossary } = useGlossary()

	return (
		<glossaryContext.Provider value={{ glossary }}>
			<AppRouter />
		</glossaryContext.Provider>
	);
}

export default App;
