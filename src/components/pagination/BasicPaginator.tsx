import { Pagination } from '@mui/material';
import React from 'react';

type BasicPaginatorProps = {
	total: number;
	onChange: (page: number) => void;
};

export const BasicPaginator = ({ total, onChange }: BasicPaginatorProps) => {
	return (
		<Pagination
			style={{
				marginBottom: 16,
			}}
			size="large"
			count={total}
			showFirstButton
			showLastButton
			onChange={(_event: React.ChangeEvent<unknown>, value: number) => {
				onChange(value);
			}}
		/>
	);
};
