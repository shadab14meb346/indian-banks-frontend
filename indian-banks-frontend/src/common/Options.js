import React from 'react';

const Options = ({ array }) => {
	return array.map((element, index) => (
		<option value={element} key={index}>
			{element}
		</option>
	));
};
export default Options;
