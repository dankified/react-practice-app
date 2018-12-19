//Dependencies
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
import About from './About';
import { BrowserRouter as Router, Route } from 'react-router-dom';

let App = () => {
	return (
		<Router>
			<div id="main-div"> 
				<Header />
				<Route exact path="/" component={ MainContent }></Route>
				<Route path="/about" component={ About }></Route>
				<Footer />
			</div>
		</Router>
	)
}

export default App;