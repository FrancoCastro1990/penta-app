import { Grid, Skeleton } from '@mui/material';
import React, { useEffect } from 'react';
import { Movie } from '../../models/Movie';
import { MovieItem } from './MovieItem';

type MovieItemProps = {
	movies: Movie[];
};

export const MoviesList = ({ movies }: MovieItemProps) => {
	const [views, setViews] = React.useState<JSX.Element[]>();

	const renderMovies = () => {
		return movies.map((movie: Movie) => {
			return (
				<Grid item key={movie.id} xs={6} md={3}>
					<MovieItem key={movie.id} movie={movie} />
				</Grid>
			);
		});
	};

	const renderSkeleton = () => {
		return Array.from({ length: 10 }).map((_, index) => {
			return (
				<Grid item key={index} xs={6} md={3}>
					<Skeleton variant="rectangular" width={276} height={393} />
				</Grid>
			);
		});
	};

	useEffect(() => {
		if (movies.length === 0) {
			setViews(renderSkeleton());
		} else {
			setViews(renderMovies());
		}
	}, [movies]);

	return (
		<Grid container spacing={3} width={'100%'} marginBottom={'16px'}>
			{views}
		</Grid>
	);
};
