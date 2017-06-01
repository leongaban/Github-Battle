import axios from 'axios'

const id = 'Iv1.bbe467a8ce6560db';
const sec = '860876aa00f6e77277af52d68b054664a056b572';
const params = `?client_id=${id}&client_secret=${sec}`;

const errlog = (method, err) => {
	console.warn(`%c${method}`, 'background: #393939; color: #F25A43', err);
	return null;
};

function getProfile(username) {
	return axios.get(`https://api.github.com/users/${username}${params}`)
		.then((user) => user.data)
		.catch((err) => errlog('api.getProfile', err));
}

function getRepos(username) {
	return axios.get(`https://api.github.com/users/${username}/repos${params}&per_page=100`)
		.catch((err) => errlog('api.getRepos', err));
}

function getStarCount(repos) {
	return repos.data.reduce((count, repo) => count + repo.stargazers_count, 0);
}

function calculateScore(profile, repos) {
	const followers = profile.followers;
	const totalStars = getStarCount(repos);
	return (followers * 3) + totalStars;
}

function getUserData(player) {
	return axios.all([
		getProfile(player),
		getRepos(player)
	]).then((data) => {
		const profile = data[0];
		const repos   = data[1];
		return {
			profile,
			score: calculateScore(profile, repos)
		}
	}).catch((err) => errlog('api.fetchPopularRepos', err));
}

function sortPlayers(players) {
	return players.sort((a, b) => b.score - a.score);
}

export const battle = (players) => {
	return axios.all(players.map(getUserData))
		.then(sortPlayers)
		.catch((err) => errlog('api.battle', err));
};

export const getPopularRepos = (language) => {
	const encodedURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);

	return axios.get(encodedURI)
		.then((res) => res.data.items)
		.catch((err) => errlog('api.fetchPopularRepos', err));
};