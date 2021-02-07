import React, { useState } from 'react';
import { Hero, Navbar, LowerHome, Footer } from './components/index';
import './styles/style.css';

function App() {
	const [darkMode, setDarkMode] = useState(true);
	return (
		<div className={darkMode ? 'container' : 'light container'}>
			<Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
			<Hero />
			<LowerHome />
			<Footer />
		</div>
	);
}

export default App;
