import axios from "axios";

const request = axios.create({
	baseURL: "http://localhost:8000/",
});

export const get = async (path: string, configs = {}) => {
	const response = await request.get(path, configs);
	return response.data;
};

export const post = async (path: string, data = {}, configs = {}) => {
	const response = await request.post(path, data, configs);
	return response.data;
};

export const put = async (path: string, data = {}, configs = {}) => {
	const response = await request.put(path, data, configs);
	return response.data;
};

export const del = async (path: string, configs = {}) => {
	const response = await request.delete(path, configs);
	return response.data;
};

export default { get, post, put, del };
