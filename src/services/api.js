import axios from "axios";

const api = axios.create({
	baseURL: 'http://almoxarifado-api.herokuapp.com/api/produtos'
});

export default api;