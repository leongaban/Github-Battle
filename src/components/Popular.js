import React from 'react'
import PropTypes from 'prop-types'
// import { getPopularRepos } from '../utils/api'
import api from '../utils/api'

function SelectLanguage (props) {
	const languagues = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
	return (
		<ul className="languagues">
			{languagues.map((lang) => {
				return (
					<li key={ lang }
						style={ lang === props.selectedLanguage ? { color: '#d0021b' } : null }
						onClick={ props.onSelect.bind(null, lang) }>
						{lang}
					</li>
				)
			})}
		</ul>
	)
}

SelectLanguage.propThypes = {
	selectedLanguage: PropTypes.string.isRequire,
	onSelect: PropTypes.func.isRequired
}

export default class Popular extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedLanguage: 'All',
			repos: null
		};
		this.updateLanguage = this.updateLanguage.bind(this);
	}

	componentDidMount() {
		api.getPopularRepos(this.state.selectedLanguage)
			.then((repos) => {
				console.log(repos);
			});
	}

	updateLanguage(lang) {
		this.setState(() => {
			return {
				selectedLanguage: lang
			}
		});
	}

	render() {
		return (
			<div>
				<SelectLanguage
					selectedLanguage={ this.state.selectedLanguage }
					onSelect={ this.updateLanguage } />
			</div>
		)
	}
}