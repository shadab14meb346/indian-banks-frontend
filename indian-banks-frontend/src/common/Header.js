// import React from 'react';
// import '../styles/header.scss';

// const Header = () => {
// 	return (
// 		<div className='main-header'>
// 			<h1>Indian Banks.com</h1>
// 			<h3>All Indian Banks Branches Addresses, IFSC Code Details</h3>
// 		</div>
// 	);
// };

// export default Header;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import '../styles/header.scss';
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
		// margin: '0 auto',
		// maxWidth: '768px',
		// width: '90%'
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		background: '#11455d',
		color: '#fff'
	},
	paperFontolor: {
		color: '#fff'
	}
}));

export default function CenteredGrid() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						<h1 className='marginZero'>Indian Banks.com</h1>
						<p className='marginZero'>
							All Indian Banks Branches Addresses, IFSC Code Details
						</p>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
}
