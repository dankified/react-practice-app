import React from 'react';
import '../styles/mainContent.css';
import Book from './Book';

const bookArray = [
	{title: "Don Quixote", author: "Miguel de Cervantes", pages: 300},
	{title: "Ulysses", author: "James Joyce", pages: 450},
	{title: "The Odyssey", author: "Homer", pages: 232},
	{title: "War and Peace", author: "Leo Tolstoy", pages: 578},
	
]


const MainContent = () => {
	return (
		<div id="main-content">
			{bookArray.map(book => <Book 
				title={book.title} 
				author={book.author}
				pages={book.pages}
			/>)}
		</div>
	)
}

export default MainContent;