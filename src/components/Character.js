import React from 'react';
import '../styles/character.css';

const Character = props => {
	return (
		<div className="character">
			<p>Name: {props.name}</p>
			<p>Age: {props.age}</p>
			<p>Height: {props.height}</p>
			<p>Weight: {props.weight}</p>
		</div>
	)
}

export default Character;