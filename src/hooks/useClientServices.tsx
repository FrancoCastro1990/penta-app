import axios from 'axios';
//import mockData from '../mockData';
//import { mockData } from '../mock/ResponseData';

export const useClientServices = () => {
	async function callClient<T>(method: string, url: string): Promise<T> {
		return axios({
			method: method,
			url: process.env.REACT_APP_USE_API_MOCK === 'true' ? 'mock/MockData.json' : url,
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		})
			.then((response) => {
				if (
					(response.data.errorMessage && response.data.errorMessage.length > 0) ||
					response.data.length === 0
				) {
					throw new Error(response.data.errorMessage);
				}
				return response.data as T;
			})
			.catch((error) => {
				throw new Error(error);
			});
	}
	return { callClient } as const;
};
