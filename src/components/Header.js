import React from 'react';
import '../styles/header.css';

const Header = () => {
	return (
		<navbar className="nav">
			<ul>
				<li>Home</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</navbar>
	)
}

export default Header;