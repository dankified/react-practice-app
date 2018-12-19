import React from 'react';
import '../styles/header.css';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<navbar className="nav">
			<ul>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/contact">Contact</Link>
			</ul>
		</navbar>
	)
}

export default Header;