import { JhplContextProvider } from './context/JhplContext';
import { Navbar } from './components/Navbar';
import { Router } from './router/Router';
import './assets/scss/main.scss';

function App() {

	return (
		<JhplContextProvider>
			<Navbar />
			<Router />
		</JhplContextProvider>
	) 
}

export default App
