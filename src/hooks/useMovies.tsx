import React, { useState } from 'react';
import { Movie } from '../models/Movie';
import { useIMBDServices } from './useIMBDServices';

export const useMovies = () => {
	const { getTop250Movies } = useIMBDServices();
	const [allMovies, setAllMovies] = useState<Movie[]>([]);
	const [currentMovies, setCurrentMoviews] = useState<Movie[]>([]);

	const fetchMovies = async () => {
		const moviesData = await getTop250Movies();
		if (moviesData && moviesData.length > 0) {
			setAllMovies(moviesData);
			setCurrentMoviews(moviesData.slice(0, 10));
		} else {
			throw new Error('error');
		}
	};

	const sliceMovies = (page: number, pageSize: number) => {
		if (page === 1) {
			setCurrentMoviews(allMovies.slice(0, pageSize));
		}
		if (page >= allMovies.length / pageSize) {
			setCurrentMoviews(allMovies.slice((page - 1) * pageSize));
		}
		setCurrentMoviews(allMovies.slice((page - 1) * pageSize, page * pageSize));
	};

	return { currentMovies, allMovies, fetchMovies, sliceMovies } as const;
};
