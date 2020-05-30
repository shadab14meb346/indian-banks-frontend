import React from 'react';
import '../styles/options.scss';
const Options = ({ array }) => {
	return array.map((element, index) => (
		<option className='option' value={element} key={index}>
			{element}
		</option>
	));
};
export default Options;
