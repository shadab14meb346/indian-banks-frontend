import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect
} from 'react-router-dom';
import Banks from './components/Banks';
import Header from './common/Header';
import NavigationBar from './common/NavigationBar';
import UserGuide from './common/UserGuide';
import SideNav from './common/SideNav';
import Footer from './common/Footer';
import Banner from './common/Banner';
import BankName from './common/BankName';
import MainSection from './common/MainSection';
import './styles/app.scss';
const App = () => {
	return (
		<div className="main">
			<div style={{ display: 'flex' }}>
				{/* <SideNav />
				<Header /> */}
				{/* <Banner />
				<BankName /> */}
			</div>
			<div>
				<Banner />
				<BankName />
				<MainSection />
			</div>
			{/* <div>
				<Router>
					<NavigationBar />
				</Router>
			</div>

			<UserGuide />
			<Banks />
			<Footer /> */}
		</div>
	);
};

export default App;
