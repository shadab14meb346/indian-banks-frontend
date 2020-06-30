import React from 'react';
import '../styles/banner.scss';

const Banner = () => {
	return (
		<>
			<header>
				<div className="banner-content">
					<div className="logo">
						<h1>Indian Banks.com</h1>
					</div>
					<div className="links">
						<a
							rel="noopener noreferrer"
							href="https://twitter.com/Shadabshs"
							target="_blank">
							Contact
						</a>
						<a
							href="https://github.com/shadab14meb346/IndianBankAPIs"
							target="_blank"
							rel="noopener noreferrer">
							Get APIs
						</a>
					</div>
				</div>
			</header>
		</>
	);
};

export default Banner;
