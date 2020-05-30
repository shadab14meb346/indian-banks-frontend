import React from 'react';
import Banks from './components/Banks';
import Header from './common/Header';
import NavigationBar from './common/NavigationBar';
import UserGuide from './common/UserGuide';
import SideNav from './common/SideNav';
import './styles/app.scss';

const App = () => {
	return (
		<div className='main'>
			<div style={{ display: 'flex' }}>
				<SideNav />
				<Header />
			</div>
			<NavigationBar />
			<UserGuide />
			<Banks />
		</div>
	);
};

export default App;
