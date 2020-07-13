import React from 'react';
import Banner from './common/Banner';
import BankName from './common/BankName';
import MainSection from './common/MainSection';
import './styles/app.scss';
const App = () => {
	return (
		<div className="main">
			<div>
				<Banner />
				<BankName />
				<MainSection />
			</div>
		</div>
	);
};

export default App;
