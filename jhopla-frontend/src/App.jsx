import { JhplContextProvider } from './context/JhplContext';
import { Navbar } from './components/Navbar';
import { Router } from './router/Router';
import './assets/scss/main.scss';
import { Footer } from './components/Footer';

function App() {

	return (
		<JhplContextProvider>
			<Navbar />
			<Router />
			<Footer />
			{/* Iniciar server php -S localhost:8080 -t public public/index.php */}
		</JhplContextProvider>
	) 
}

export default App
