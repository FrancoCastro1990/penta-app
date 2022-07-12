import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { MoviesList } from './MoviesList';

describe('MoviesList', () => {


    it('should render list of movies in MoviesList component', () => {

        const mockMovies = [{
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
        }];
        act(() => {
            render(<MoviesList movies={mockMovies} />);
        });

        const moviesList = screen.getAllByText(`# ${mockMovies[0].rank}`);

        expect(moviesList).toHaveLength(1);
    });

    it('should render skeleton when movies is empty', () => {

        act(() => {
            render(<MoviesList movies={[]} />);
        });

        const skeleton = screen.getAllByTitle('loading');
        expect(skeleton).toHaveLength(10);
    
    });

});