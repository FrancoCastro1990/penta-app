import { renderHook } from '@testing-library/react';
import { useIMBDServices } from './useIMBDServices';

jest.mock('./useIMBDServices', () => {
	return {
		useIMBDServices: jest.fn(() => {
			return {
				getTop250Movies: jest.fn(() => {
					return Promise.resolve([
						{
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
						},
					]);
				}),
			};
		}),
	};
});

describe('useIMBDServices', () => {
	it('should return IMBDServices', async () => {
		const { result } = renderHook(() => useIMBDServices());

		await expect(result.current.getTop250Movies()).resolves.toMatchObject([
			{
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
			},
		]);
	});

	it('should return error', async () => {
		const { result } = renderHook(() => useIMBDServices());
		jest.spyOn(result.current, 'getTop250Movies').mockImplementation(() => {
			return Promise.reject(new Error('error'));
		});

		await expect(result.current.getTop250Movies()).rejects.toThrowError();
	});
});
