import React from 'react';
import App from '../App';
import BankByIFSC from '../components/BankByIFSC';
import '../styles/navigation.scss';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect
} from 'react-router-dom';
const NavigationBar = () => {
	return (
		// <Router>
		<>
			<div className="main-navigation">
				<Link className="link" to="/home">
					<Redirect from="/home" to="/" />
					<span>Home</span>
				</Link>
				{/* <Link className="link" to="/bank-by-name">
					<span>Search By Bank Name</span>
				</Link> */}
				{/* <Link className="link" to="/bank-by-ifsc">
					<span>Search By IFSC Code</span>
				</Link> */}
				<a
					className="link"
					href="https://github.com/shadab14meb346/IndianBankAPIs"
					target="_blank"
					rel="noopener noreferrer">
					<span>Get APIs</span>
				</a>
			</div>
			<Switch>
				{/* <Route exact path='/home'>
					<div>HOME</div>
				</Route> */}
				<Redirect from="/home" to="/" />
				{/* <Route exact path="/bank-by-ifsc">
					<BankByIFSC />
				</Route> */}
				<Route path="/get-apis"></Route>
				{/* <Route path='/'>
					<BankByIFSC />
				</Route> */}
			</Switch>
		</>
		// </Router>
	);
};

export default NavigationBar;
