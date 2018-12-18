import React from 'react';

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