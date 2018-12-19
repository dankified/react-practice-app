//Dependencies
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
import About from './About';
import Contact from './Contact';
import { BrowserRouter as Router, Route } from 'react-router-dom';

let App = () => {
	return (
		//Create Router instance so that we can use client side routing
		<Router>
			<div id="main-div"> 
				<Header />
				{/* Define Routes inside Router. Routes have a path and component
					prop that are mandatory. For the root path be sure to use the exact prop
				*/}
				<Route exact path="/" component={ MainContent }></Route>
				<Route path="/about" component={ About }></Route>
				<Route path="/contact" component={ Contact }></Route>
				<Footer />
			</div>
		</Router>
	)
}

export default App;