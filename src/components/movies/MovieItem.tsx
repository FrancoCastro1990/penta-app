import { Card, CardContent, CardMedia, Skeleton, Typography } from '@mui/material';
import React from 'react';
import { Movie } from '../../models/Movie';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
type MovieItemProps = {
	movie: Movie;
};

export const MovieItem = ({ movie }: MovieItemProps) => {
	const [isImageLoading, setIsImageLoading] = React.useState(true);
	return (
		<Card
			elevation={3}
			style={{
				backgroundColor: '#fafafa',
				position: 'relative',
			}}
		>
			<CardMedia
				height="256"
				component="img"
				image={movie.image}
				loading="lazy"
				style={{
					opacity: isImageLoading ? 0 : 1,
					transition: 'opacity 0.5s',
				}}
				onLoad={() => {
					setIsImageLoading(false);
				}}
			/>
			<Skeleton
				animation={'wave'}
				variant="rectangular"
				height={256}
				width={'100%'}
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					opacity: isImageLoading ? 1 : 0,
					transition: 'opacity 0.5s',
				}}
			/>
			<div
				style={{
					position: 'absolute',
					top: '0',
					left: '0',
					padding: '4px 8px',
					backgroundColor: 'rgba(0,0,0,1)',
					background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
					width: '100%',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					alignContent: 'center',
					boxSizing: 'border-box',
				}}
			>
				<Typography variant="body1" component="p" color={'white'}>
					# {movie.rank}
				</Typography>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						alignContent: 'center',
					}}
				>
					<StarRoundedIcon
						style={{
							color: '#ffd700',
						}}
					/>{' '}
					<Typography
						variant="body1"
						component="p"
						color={'white'}
						style={{
							marginTop: '2px',
							marginLeft: '4px',
						}}
					>
						{movie.imDbRating}
					</Typography>
				</div>
			</div>
			<CardContent>
				<Typography gutterBottom variant="body1" component="p" minHeight={48} fontWeight={'bold'}>
					{movie.title} ({movie.year})
				</Typography>
				<Typography gutterBottom variant="caption" component="p">
					{movie.crew}
				</Typography>
			</CardContent>
		</Card>
	);
};
