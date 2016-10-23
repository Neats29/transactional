const apiRoot = 'https://api.s101.nonprod-ffs.io/ops-engineer/';
const profileEndpoint = apiRoot + 'profile';
const transactionsEndpoint = apiRoot + 'list';


const handleFetch = (result) => result.then(res => res.json()).catch(err => console.log(err));

export const getUserInfo = handleFetch(fetch(profileEndpoint));
export const getTransactionData = handleFetch(fetch(transactionsEndpoint));
