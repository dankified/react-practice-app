import React from 'react';
import '../styles/mainContent.css';
import BookCollection from './BookCollection';

const bookArray = [
	{title: "Don Quixote", author: "Miguel de Cervantes", pages: 300, genre: 'medieval fantasy'},
	{title: "Ulysses", author: "James Joyce", pages: 450, genre: 'pretentious shit'},
	{title: "The Odyssey", author: "Homer", pages: 232, genre: 'greek tragedy'},
	{title: "War and Peace", author: "Leo Tolstoy", pages: 578, genre: 'pretentious shit'}
]

const MainContent = () => {
	return (
		<div id="main-content">
			<BookCollection genre="pretentious shit" bookArray={bookArray} />
		</div>
	)
}

export default MainContent;