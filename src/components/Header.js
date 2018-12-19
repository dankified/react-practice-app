import React from 'react';
import '../styles/header.css';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<navbar className="nav">
			<ul>
				{/* Link takes a to prop. When clicked, Link will update your current URL
				to that specified in the to prop. Therefore rendering the component bound
				to that specific path */}
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/contact">Contact</Link>
			</ul>
		</navbar>
	)
}

export default Header;