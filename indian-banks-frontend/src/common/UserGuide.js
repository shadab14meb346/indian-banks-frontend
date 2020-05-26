import React from 'react';
import NameTag from '../common/NameTag';
import '../styles/userGuide.scss';
const UserGuide = () => {
	return (
		<div className='user-guide-div'>
			<NameTag tagName='SEARCH ANY BANK BRANCH IN INDIA' />
			<p>
				Select bank, state, district & branch to find other details of the bank
			</p>
		</div>
	);
};

export default UserGuide;
