import React from 'react';
import '../styles/book.css';

const Book = props => {
	return (
		<div className="book">
			<p>Title: {props.title}</p>
			<p>Author: {props.author}</p>
			<p>Pages: {props.pages}</p>
		</div>
	)
}

export default Book;