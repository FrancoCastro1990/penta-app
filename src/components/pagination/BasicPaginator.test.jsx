import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { BasicPaginator } from './BasicPaginator';

describe('BasicPaginator', () => {

    it('should renders without crashing', () => {
        act(() => {
            render(<BasicPaginator />);
        });
    });

    it('should renders with total of count is 10 for 100 element', () => {
        act(() => {
            render(<BasicPaginator total={100} />);
        });
        expect(screen.getByText('100')).toBeInTheDocument();
    });

    it('should call onChange event', () => {
        const onChange = jest.fn();
        const total = 100;

        act(() => {
            render(<BasicPaginator total={total} onChange={onChange} />);
        });
        screen.getByText('1').click();
        expect(onChange).toHaveBeenCalled();
    });

});