import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { act } from 'react-dom/test-utils';

describe('app', () => {
	it('should render app', () => {
		act(() => {
			render(<App />);
		});
		const linkElement = screen.getByText(/IMBD TOP 250 MOVIES/i);
		expect(linkElement).toBeInTheDocument();
	});
});
