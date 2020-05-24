import React from 'react';

function Options({ array }) {
	return array.map((element, index) => (
		<option value={element} key={index}>
			{element}
		</option>
	));
}
export default Options;
