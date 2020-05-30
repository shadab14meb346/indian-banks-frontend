import React from 'react';
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
		<Router>
			<div className='main-navigation'>
				<Link className='link' to='/home'>
					<span>Home</span>
				</Link>
				<Link className='link' to='/bank-by-name'>
					<span>Search By Bank Name</span>
				</Link>
				<Link className='link' to='/bank-by-branch-name'>
					<span>Search For Branch Name</span>
				</Link>
				<Link className='link' to='/bank-by-ifsc'>
					<span>Search By IFSC Code</span>
				</Link>
				<Link className='link' to='/get-apis'>
					<span>Get APIs</span>
				</Link>
			</div>
			<Switch>
				<Route path='/home'>
					<div>HOME</div>
				</Route>
				<Route path='/bank-by-ifsc'>
					<div>HOME</div>
				</Route>
				<Route path='/get-apis'></Route>
			</Switch>
		</Router>
	);
};

export default NavigationBar;
