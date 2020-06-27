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
				id="mySidenav"
				className="sidenav">
				<span className="closebtn" onClick={close}>
					&times;
				</span>
				{/* <a>Home</a> */}
				{/* <a>Search By IFSC Code</a> */}
				<a
					href="https://github.com/shadab14meb346/IndianBankAPIs"
					target="_blank"
					rel="noopener noreferrer">
					Get APIs
				</a>
			</div>
			<span className="sidenav-toggle" onClick={handleClick}>
				&#9776;
			</span>
		</>
	);
};

export default SideNav;
