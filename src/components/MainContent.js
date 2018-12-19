import React from 'react';
import '../styles/mainContent.css';
import CharacterList from './CharacterList';
import axios from 'axios';

class MainContent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			characters: []
		}
		this.deleteCharacter = this.deleteCharacter.bind(this);
	}

	async componentDidMount() {
		this.fetchCharacter();
	}

	async fetchCharacter() {
		let randomId = Math.random() * 10;
		randomId = Math.ceil(randomId);
		let {data: character} = await axios.get('https://swapi.co/api/people/'+randomId);
		this.setState({
			characters: [...this.state.characters, character]
		})
	}

	deleteCharacter(id) {
		//Find character with id property equals to id argument.
		let index = this.state.characters.findIndex(el => el.id === id);
		//If found, will delete element at said position and update the characters array
		if(index !== -1) {
			this.state.characters.splice(index, 1);
			this.setState({
				characters: this.state.characters
			})
		}
	}

	render() {
		return (
			<div>
				<button onClick={() => this.fetchCharacter()}>Get new character</button>
				<div id="main-content">
					<CharacterList characters={this.state.characters} deleteCharacter={this.deleteCharacter}/>
				</div>
			</div>
		)
	}
}

export default MainContent;