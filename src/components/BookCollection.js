import React from 'react';
import Book from './Book';

const BookCollection = props => {
	let books = props.bookArray.filter(book => book.genre === props.genre);
	return (
		<div>
			{books.map(book => <Book 
				title={book.title} 
				author={book.author}
				pages={book.pages}
			/>)}
		</div>
	)
}

export default BookCollection;