import '../styles/globals.css';
import Dock from '../components/Dock';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
			<Dock />
		</>
	);
}

export default MyApp;
