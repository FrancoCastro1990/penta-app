import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { MovieItem } from './MovieItem';

describe('MovieItem', () => {


	it('should render MovieItem component', () => {
		const mockMovie = {
			id: 'tt1454029',
			rank: '249',
			title: 'The Help',
			fullTitle: 'The Help (2011)',
			year: '2011',
			image:
				'https://imdb-api.com/images/original/MV5BMTM5OTMyMjIxOV5BMl5BanBnXkFtZTcwNzU4MjIwNQ@@._V1_Ratio0.6716_AL_.jpg',
			crew: 'Tate Taylor (dir.), Emma Stone, Viola Davis',
			imDbRating: '8.0',
			imDbRatingCount: '452598',
		};
		act(() => {
			render(<MovieItem movie={mockMovie} />);
		});

		expect(screen.getByText(`${mockMovie.title} (${mockMovie.year})`)).toBeInTheDocument();
		expect(screen.getByText(`${mockMovie.imDbRating}`)).toBeInTheDocument();
		expect(screen.getByText(`${mockMovie.crew}`)).toBeInTheDocument();
		expect(screen.getByText(`# ${mockMovie.rank}`)).toBeInTheDocument();
	});
});
