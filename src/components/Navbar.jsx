import React from 'react';
import logo from '../assets/icons/d2x-logo.svg';
import Slider from './Slider';
import blueLogo from '../assets/icons/d2x-logo-blue.svg';

const Navbar = ({ setDarkMode, darkMode }) => {
	return (
		<div className='nav-container'>
			<div className='logo'>
				<img src={darkMode ? logo : blueLogo} alt='logo' />
			</div>
			<ul>
				<Slider setDarkMode={setDarkMode} />
				<li>Home</li>
				<li>Work</li>
				<li>Services</li>
				<li>Contact</li>
				<li>Privacy</li>
			</ul>
		</div>
	);
};

export default Navbar;
