import axios from "axios";

const request = axios.create({
	baseURL: "http://localhost:8000/",
});

export const get = async (path: string, options = {}) => {
	const response = await request.get(path, options);
	return response.data;
};

export const post = async (path: string, options = {}) => {
	const response = await request.post(path, options);
	return response.data;
};

export const put = async (path: string, options = {}) => {
	const response = await request.put(path, options);
	return response.data;
};

export const del = async (path: string, options = {}) => {
	const response = await request.delete(path, options);
	return response.data;
};

export default { get, post, put, del };
