import React, { useState } from 'react';
import '../styles/sidenav.scss';

const SideNav = () => {
	const [sideNavWidth, setSideNavWidth] = useState(0);
	const close = () => {
		setSideNavWidth(0);
	};
	const handleClick = () => {
		setSideNavWidth((prevState) => {
			if (prevState === 0) {
				return '50%';
			} else {
				return '0';
			}
		});
	};
	return (
		<>
			<div
				style={{ width: `${sideNavWidth}` }}
				id='mySidenav'
				className='sidenav'>
				<span className='closebtn' onClick={close}>
					&times;
				</span>
				<p>Home</p>
				<p>Search By Bank Name</p>
				<p>Search For Branch Name</p>
				<p>Search By IFSC Code</p>
				<p>Get APIs</p>
			</div>
			<span className='sidenav-toggle' onClick={handleClick}>
				&#9776;
			</span>
		</>
	);
};

export default SideNav;
