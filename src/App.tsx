import React, { useEffect, useState } from 'react';
import { MoviesList } from './components/movies/MoviesList';
import './app.css';
import { BasicPaginator } from './components/pagination/BasicPaginator';
import { useMovies } from './hooks/useMovies';
import { ErrorBox } from './components/error/ErrorBox';
import { Typography } from '@mui/material';

function App() {
	const { currentMovies, allMovies, fetchMovies, sliceMovies } = useMovies();
	const [hasError, setHasError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	useEffect(() => {
		fetchMovies().catch((error) => {
			setHasError(true);
			setErrorMessage(error.message);
		});
	}, []);

	return (
		<div className="main-container">
			<Typography variant="h2"
			margin={'16px'}
			> IMBD TOP 250 MOVIES</Typography>
			<BasicPaginator
				total={allMovies.length / 10}
				onChange={(page: number) => {
					sliceMovies(page, 10);
				}}
			/>
			{hasError ? <ErrorBox error={errorMessage} /> : <MoviesList movies={currentMovies} />}
		</div>
	);
}

export default App;
