import React from 'react';
import { loading, getBankDetails, branchSelected } from '../actions/main';
import '../styles/bankByIFSC.scss';
const BankByIFSC = ({ dispatch, setError, inputIFSC, error, setInputIFSC }) => {
	const fetchBankDetailsFromIFSC = async (IFSC) => {
		if (error) {
			setError('Invalid code');
			return;
		}
		dispatch(loading(true));
		dispatch(branchSelected(true));
		const url = `https://indian-banks-apis.herokuapp.com/get-bank-details?ifsccode=${IFSC.toUpperCase()}`;
		const response = await fetch(url);
		const data = await response.json();
		dispatch(loading(false));
		dispatch(branchSelected(true));
		dispatch(getBankDetails(data.data));
	};
	return (
		<div className="bank-by-ifsc">
			<h3>Or Enter IFSC Code to know Bank details</h3>
			<div className="bank-by-ifsc-content">
				<div className="bank-by-ifsc-content-item">
					<p>IFSC Code</p>
					<input
						onChange={(event) => {
							const inputValLength = event.target.value.length;
							if (inputValLength === 11) {
								setError(null);
							}
							if (inputValLength < 11 || inputValLength > 11) {
								setError('Invalid code');
							}
							setInputIFSC(event.target.value);
						}}
						placeholder="Enter IFSC Code"
						type="text"></input>
				</div>
				<button onClick={() => fetchBankDetailsFromIFSC(inputIFSC)}>
					Get Details
				</button>
			</div>
			{error ? <p className="error">Error:{error}</p> : null}
		</div>
	);
};

export default BankByIFSC;
