import axios from 'axios';

const callApi = (api, method = 'GET', dataRequest) => {
	return axios({
		method: method,
		url: `http://5c7aa94b78a13a0014a092ce.mockapi.io/ReactJS/api/${api}`,
		data: dataRequest
	}).catch(err => console.error(err));
}

export default callApi;