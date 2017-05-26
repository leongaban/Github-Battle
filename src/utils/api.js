import axios from 'axios'

const errLog = (method, err) => console.log(`%c${method}`, 'background: #393939; color: #F25A43', err);

export const getPopularRepos = (language) => {
	const encodedURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);

	return axios.get(encodedURI)
		.then((res) => res.data.items)
		.catch((err) => errLog('api.fetchPopularRepos', err));
};