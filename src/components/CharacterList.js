import React from 'react';
import Character from './Character';

const CharacterList = props => {
	return (
		<div>
			{props.characters.map(character => <Character 
				name={character.name} 
				age={character.age}
				weight={character.weight}
				height={character.height}
			/>)}
		</div>
	)
}

export default CharacterList;