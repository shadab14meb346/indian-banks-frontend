import React from 'react';
import Banks from './components/Banks';
import Header from './common/Header';
import NavigationBar from './common/NavigationBar';
import './styles/app.scss';

const About = () => {
	return (
		<div>
			<h2>SEARCH ANY BANK BRANCH IN INDIA</h2>
		</div>
	);
};
const App = () => {
	return (
		<div className='main'>
			<Header />
			<NavigationBar />
			<About />
			<Banks />
		</div>
	);
};

export default App;
