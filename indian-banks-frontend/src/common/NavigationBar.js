import React from 'react';
import '../styles/navigation.scss';

const NavigationBar = () => {
	return (
		<div className='main-navigation'>
			<span>Home</span>
			<span>Search By Bank Name</span>
			<span>Search For Branch Name</span>
			<span>Search By IFSC Code</span>
		</div>
	);
};

export default NavigationBar;
