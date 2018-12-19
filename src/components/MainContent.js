import React from 'react';
import '../styles/mainContent.css';
import CharacterList from './CharacterList';

class MainContent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			characters: []
		}
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div id="main-content">
				<CharacterList characters={this.state.characters} />
			</div>
		)
	}
}

export default MainContent;