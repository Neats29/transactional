import axios from 'axios';
const profileEndpoint = 'https://api.s101.nonprod-ffs.io/ops-engineer/profile';
const transactionsEndpoint = 'https://api.s101.nonprod-ffs.io/ops-engineer/list';

export function getUserInfo() {
	return axios.get(profileEndpoint)
		.then(response => {
			console.log(response);
			return response.data;
		})
		.catch(error => {
			console.log(error);
		});
}
