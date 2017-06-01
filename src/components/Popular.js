import React from 'react'
import PropTypes from 'prop-types'
import * as api from  '../utils/api'

function SelectLanguage(props) {
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

function RepoGrid(props) {
	return (
		<ul className="popular-list">
			{ props.repos.map((repo, index) => {
				return (
					<li key={ repo.name } className="popular-item">
						<div className="popular-rank">#{index + 1}</div>
						<ul className="space-list-items">
							<li>
								<img className="avatar"
									 src={ repo.owner.avatar_url }
									 alt={ `Avatar for ${repo.owner.login}` } />
							</li>
							<li><a href={ repo.html_url }>{ repo.name }</a></li>
							<li>@{ repo.owner.login }</li>
							<li>{ repo.stargazers_count } stars</li>
						</ul>
					</li>
				)
			})}
		</ul>
	)
}

RepoGrid.propTypes = {
	repos: PropTypes.array.isRequired
}

SelectLanguage.propTypes = {
	selectedLanguage: PropTypes.string.isRequired,
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
		this.updateLanguage(this.state.selectedLanguage);
	}

	updateLanguage(lang) {
		this.setState(() => {
			return { selectedLanguage: lang }
		});

		this.setState(() => {
			return { repos: null }
		}, () => {
			api.getPopularRepos(lang)
				.then((repos) => {
					this.setState(() => {
						return { repos }
					});
				});
		});
	}

	render() {
		return (
			<div>
				<SelectLanguage
					selectedLanguage={ this.state.selectedLanguage }
					onSelect={ this.updateLanguage } />
				{ !this.state.repos 
					? <p className="text-center">
						<img src="https://githubbattle.now.sh/imgs/animal.gif"/><br/>
						Loading...
					  </p>
					: <RepoGrid repos={ this.state.repos } /> }
			</div>
		)
	}
}