//Dependencies
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';

let App = () => {
	return (
		<div id="main-div"> 
			<Header />
			<MainContent />
			<Footer />
		</div>
	)
}

export default App;