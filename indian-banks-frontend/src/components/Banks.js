import React, { useEffect, useState } from 'react';
import Options from '../common/Options';
import NameTag from '../common/NameTag';
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

const Banks = () => {
	const [banks, setBanks] = useState(['Select Bank Name']);
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
			setBranchDetails(branchDetails.data);
		}
		if (selectedBranch) {
			fetchData();
		}
	}, [selectedBranch]);
	return (
		<div className='outer-container'>
			{/* <Fetch url={allBanksURL}>{setBanks}</Fetch> */}

			<NameTag tagName='Select a bank' />
			<select
				// className='select'
				id='banksName'
				onChange={(event) => {
					setStates(['State']);
					setDistricts(['District']);
					setBranches(['Branch']);
					setBranchDetails({});
					handleSelect(event, setSelectedBank);
				}}>
				<Options array={banks.map((bank) => bank.bank_name || bank)} />
			</select>

			<NameTag tagName='Select A State' />
			<select
				// className='select'
				id='stateName'
				onChange={(event) => {
					setDistricts(['District']);
					setBranches(['Branch']);
					setBranchDetails({});
					handleSelect(event, setSelectedState);
				}}>
				<Options array={states} />
			</select>

			<NameTag tagName='Districts' />
			<select
				// className='select'
				id='districtName'
				onChange={(event) => {
					setBranches(['Branch']);
					setBranchDetails({});
					handleSelect(event, setSelectedDistrict);
				}}>
				<Options array={districts} />
			</select>

			<NameTag tagName='Branches' />
			<select
				// className='select'
				id='branchName'
				onChange={(event) => {
					handleSelect(event, setSelectedBranch);
				}}>
				<Options array={branches} />
			</select>

			<NameTag tagName='Branch Details' />
			<div>
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
		</div>
	);
};

export default Banks;
