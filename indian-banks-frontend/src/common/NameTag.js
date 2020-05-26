import React from 'react';
import '../styles/nameTag.scss';
const NameTag = ({ tagName }) => {
	return <h2 className='heading-font'>{tagName}</h2>;
};

export default NameTag;
