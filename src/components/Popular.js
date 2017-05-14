import React from 'react';

export default class Popular extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedLanguage: 'All'
		};
		this.updateLanguage = this.updateLanguage.bind(this);
	}

	updateLanguage(lang) {
		this.setState(() => {
			return {
				selectedLanguage: lang
			}
		})
	}

	render() {
		const languagues = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

		return (
			<ul className="languagues">
				{languagues.map((lang) => {
					return (
						<li key={lang}
							style={lang === this.state.selectedLanguage ? { color: '#d0021b' } : null }
							onClick={ this.updateLanguage.bind(null, lang) }>
							{lang}
						</li>
					)
				})}	
			</ul>
		)
	}
}