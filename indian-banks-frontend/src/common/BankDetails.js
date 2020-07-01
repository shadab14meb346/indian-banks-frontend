import React from 'react';
import { connect } from 'react-redux';
import LoadingModel from '../common/LoadingModel';
import '../styles/bank-details.scss';
const BankDetails = ({ branchSelected, loading, bankDetails }) => {
	console.log({ branchSelected, loading, bankDetails });
	const {
		bank_name,
		ifsc,
		address,
		state,
		city,
		branch,
		district
	} = bankDetails;
	return branchSelected && loading ? (
		<LoadingModel />
	) : !loading ? (
		<div className="card">
			{/* <img src="../images/sbi.co.in.png" /> */}
			<h3>
				{/* <img src="https://i.ibb.co/Bs8FTkk/sbi-co-in.png" alt="sbi-co-in"></img> */}
				{bank_name} ({ifsc})
			</h3>
			<div className="card-content">
				<div>
					<span className="key">IFSC Code :</span>
					<span className="value">
						{ifsc} (used for RTGS, IMPS and NEFT Transactions)
					</span>
				</div>
				<div>
					<span className="key">Address :</span>
					<span className="value">{address}</span>
				</div>
				<div>
					<span className="key">State : </span>
					<span className="value">{state}</span>
				</div>
				<div>
					<span className="key">City : </span>
					<span className="value">{city}</span>
				</div>
				<div>
					<span className="key">Branch : </span>
					<span className="value">{branch}</span>
				</div>
				<div>
					<span className="key">District : </span>
					<span className="value">{district}</span>
				</div>
			</div>
		</div>
	) : null;
};

const mapStateToProps = (state) => {
	return {
		loading: state.main.loading,
		bankDetails: state.main.bankDetails,
		branchSelected: state.main.branchSelected
	};
};

export default connect(mapStateToProps)(BankDetails);
