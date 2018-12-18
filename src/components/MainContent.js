import React from 'react';
import '../styles/mainContent.css';
import Book from './Book';

const MainContent = () => {
	return (
		<div id="main-content">
			<Book title="Moby Dick" author="Herman Melville" pages="1000" />
			<Book title="War and Peace" author="Leo Tolstoy" pages="9000"/>
			<Book title="Hairy Potter" author="J.K. Rowdy" pages="300"/>
		</div>
	)
}

export default MainContent;