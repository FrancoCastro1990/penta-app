import React from 'react';
import { ServicesResponse } from '../models/ServicesResponse';
import { useClientServices } from './useClientServices';

export const useIMBDServices = () => {
	const { callClient } = useClientServices();

	const getTop250Movies = async () => {
		try {
			const response = await callClient<ServicesResponse>(
				'GET',
				`${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_KEY}`
			);
			return response.items;
		} catch (error: any) {
			throw new Error(error.message);
		}
	};
	return { getTop250Movies } as const;
};
