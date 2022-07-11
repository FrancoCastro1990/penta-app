import { Typography } from '@mui/material';
import React from 'react';

type ErrorBoxProps = {
	error: string;
};

export const ErrorBox = ({ error }: ErrorBoxProps) => {
	return (
		<div>
			<img
				src="https://www.pentafinanciero.cl/wp-content/uploads/2021/12/Page-Not-Found.png"
				alt="error"
				style={{ width: '100%' }}
			/>
			<Typography gutterBottom variant="body1" component="p">
				Disculpa pero en este momento no es posible obtener la información solicitada.
			</Typography>
			<Typography variant="caption" component="p" align="center" color="red">
				{error}
			</Typography>
		</div>
	);
};
