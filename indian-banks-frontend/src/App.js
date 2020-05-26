import React from 'react';
import Banks from './components/Banks';
import Header from './common/Header';
import NavigationBar from './common/NavigationBar';
import UserGuide from './common/UserGuide';
import './styles/app.scss';

const App = () => {
	return (
		<div className='main'>
			<Header />
			<NavigationBar />
			<UserGuide />
			<Banks />
		</div>
	);
};

export default App;
