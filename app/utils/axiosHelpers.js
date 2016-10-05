import axios from 'axios';
const apiRoot = 'https://api.s101.nonprod-ffs.io/ops-engineer/';
const profileEndpoint = apiRoot + 'profile';
const transactionsEndpoint = apiRoot + 'list';

export function getUserInfo() {
	return axios.get(profileEndpoint)
		.then(response => {
			console.log(response.data);
			return response.data;
		})
		.catch(error => {
			console.log(error);
		});
}

export function getTransactionData() {
	return axios.get(transactionsEndpoint)
		.then(response => {
			//console.log("trans: " + response.data.items[0]);
			return response.data;
		})
		.catch(error => {
			console.log(error);
		});
}
