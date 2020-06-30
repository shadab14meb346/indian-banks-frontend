import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Options from '../common/Options';
import NameTag from '../common/NameTag';
import Loading from '../common/Loading';
import bankNames from '../util/bankNames';
import LoadingModel from '../common/LoadingModel';
import { loading, getBankDetails, branchSelected } from '../actions/main';
import '../styles/banks.scss';
const deployedURL = 'https://indian-banks-apis.herokuapp.com';
const localURL = 'http://localhost:3001';

const url = deployedURL;
const allBanksURL = `${url}/get-all-banks-name-list`;

const handleSelect = (event, setSelectFunction) => {
	setSelectFunction(event.target.value);
};

const Fetch = ({ url, children }) => {
	useEffect(() => {
		async function fetchData() {
			const response = await fetch(url);
			const data = await response.json();
			children(data.data);
		}
		fetchData();
	});
	return null;
};

const Banks = ({ dispatch }) => {
	const [banks, setBanks] = useState(bankNames);
	const [states, setStates] = useState(['Select a bank first']);
	const [districts, setDistricts] = useState(['Select a state first']);
	const [branches, setBranches] = useState(['Select a district first']);
	const [selectedBank, setSelectedBank] = useState(null);
	const [selectedState, setSelectedState] = useState(null);
	const [selectedDistrict, setSelectedDistrict] = useState(null);
	const [selectedBranch, setSelectedBranch] = useState(null);
	const [branchDetails, setBranchDetails] = useState({});
	useEffect(() => {
		async function fetchData() {
			const response = await fetch(allBanksURL);
			const allBanks = await response.json();
			setBanks(['Select Bank Name', ...allBanks.data]);
		}
		fetchData();
	}, []);

	useEffect(() => {
		const banksInStatesURL = `${url}/get-list-of-states-bank-available-in?bank_name=${selectedBank}`;
		async function fetchData() {
			const response = await fetch(banksInStatesURL);
			const allStates = await response.json();
			setStates(['State', ...allStates.data.map((bank) => bank.state)]);
		}
		if (selectedBank) {
			fetchData();
		}
	}, [selectedBank]);

	useEffect(() => {
		const banksInDistrictURL = `${url}/get-list-of-districts-bank-available-in?bank_name=${selectedBank}&state=${selectedState}`;
		async function fetchData() {
			const response = await fetch(banksInDistrictURL);
			const allDistricts = await response.json();
			setDistricts([
				'District',
				...allDistricts.data.map((bank) => bank.district)
			]);
		}
		if (selectedState) {
			fetchData();
		}
	}, [selectedState]);

	useEffect(() => {
		const branchesInDistrictURL = `${url}/get-list-of-all-bank-branch-available-in?bank_name=${selectedBank}&state=${selectedState}&district=${selectedDistrict}`;
		async function fetchData() {
			const response = await fetch(branchesInDistrictURL);
			const allBranches = await response.json();
			setBranches(['Branch', ...allBranches.data.map((bank) => bank.branch)]);
		}
		if (selectedDistrict) {
			fetchData();
		}
	}, [selectedDistrict]);

	useEffect(() => {
		const branchDetailsURL = `${url}/get-bank?bank_name=${selectedBank}&state=${selectedState}&district=${selectedDistrict}&branch=${selectedBranch}`;
		async function fetchData() {
			const response = await fetch(branchDetailsURL);
			const branchDetails = await response.json();
			dispatch(loading(false));
			dispatch(getBankDetails(branchDetails.data));
			setBranchDetails(branchDetails.data);
		}
		if (selectedBranch) {
			fetchData();
		}
	}, [selectedBranch]);
	return (
		<div className="outer-container">
			{/* <Fetch url={allBanksURL}>{setBanks}</Fetch> */}

			<NameTag tagName="Banks" />
			<select
				// className='select'
				id="banksName"
				onChange={(event) => {
					setStates(['Loading...']);
					setDistricts(['Select a state first']);
					setBranches(['Select a district first']);
					setBranchDetails({});
					setSelectedBranch(null);
					dispatch(branchSelected(false));
					handleSelect(event, setSelectedBank);
				}}>
				{banks.length === 1 ? (
					<option>Loading...</option>
				) : (
					<Options array={banks.map((bank) => bank.bank_name || bank)} />
				)}
			</select>

			<NameTag tagName="States" />
			<select
				// className='select'
				id="stateName"
				onChange={(event) => {
					setDistricts(['Loading...']);
					setBranches(['Select a district first']);
					setBranchDetails({});
					setSelectedBranch(null);
					dispatch(branchSelected(false));
					handleSelect(event, setSelectedState);
				}}>
				{states.length === 1 ? (
					<option>{states[0]}</option>
				) : (
					<Options array={states} />
				)}
			</select>

			<NameTag tagName="Districts" />
			<select
				// className='select'
				id="districtName"
				onChange={(event) => {
					setBranches(['Loading...']);
					setBranchDetails({});
					setSelectedBranch(null);
					dispatch(branchSelected(false));
					handleSelect(event, setSelectedDistrict);
				}}>
				{districts.length === 1 ? (
					<option>{districts[0]}</option>
				) : (
					<Options array={districts} />
				)}
			</select>

			<NameTag tagName="Branches" />
			<select
				// className='select'
				id="branchName"
				onChange={(event) => {
					dispatch(loading(true));
					dispatch(branchSelected(true));
					handleSelect(event, setSelectedBranch);
				}}>
				{branches.length === 1 ? (
					<option>{branches[0]}</option>
				) : (
					<Options array={branches} />
				)}
			</select>
			{/* {console.log(selectedBranch)}
			<NameTag tagName="Branch Details" />
			{selectedBranch ? (
				!Object.keys(branchDetails).length ? (
					<LoadingModel />
				) : (
					<div className="branch-details">
						{Object.entries(branchDetails).map((element) => {
							const [key, value] = element;
							return key !== '_id' ? (
								<div key={key}>
									<p>
										<b>{key}&nbsp;</b>: &nbsp;<span>{value}</span>
									</p>
								</div>
							) : null;
						})}
					</div>
				)
			) : null} */}
		</div>
	);
};
const mapStateToProps = (state) => {
	return {
		loading: state.main.loading,
		bankDetails: state.main.bankDetails,
		branchSelected: state.main.branchSelected
	};
};

export default connect(mapStateToProps)(Banks);
