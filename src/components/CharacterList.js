import React from 'react';
import Character from './Character';

const CharacterList = props => {
	return (
		<div>
			{props.characters.map(character => <Character 
				id={character.id}
				name={character.name} 
				age={character.age}
				weight={character.weight}
				height={character.height}
				deleteCharacter={props.deleteCharacter}
			/>)}
		</div>
	)
}

export default CharacterList;