import React, { useEffect, useState } from "react";

const allBanksURL = "http://localhost:3001/get-total-no-of-each-banks";

function handleSelectedBank(event, setSelectedBank) {
	console.log(event.target.value);
	setSelectedBank(event.target.value);
}
function handleSelectedState(event, setSelectedState) {
	console.log(event.target.value);
	setSelectedState(event.target.value);
}
function handleSelectedDistrict(event, setSelectedDistrict) {
	console.log(event.target.value);
	setSelectedDistrict(event.target.value);
}

function handleSelectedBranch(event, setSelectedBranch) {
	console.log(event.target.value);
	setSelectedBranch(event.target.value);
}
function Banks() {
	const [banks, setBanks] = useState([]);
	const [states, setStates] = useState([]);
	const [districts, setDistricts] = useState([]);
	const [branches, setBranches] = useState([]);
	const [selectedBank, setSelectedBank] = useState(null);
	const [selectedState, setSelectedState] = useState(null);
	const [selectedDistrict, setSelectedDistrict] = useState(null);
	const [selectedBranch, setSelectedBranch] = useState(null);
	const [branchDetails, setBranchDetails] = useState({});
	useEffect(() => {
		async function fetchData() {
			const response = await fetch(allBanksURL);
			const allBanks = await response.json();
			console.log(allBanks);
			setBanks(allBanks.data);
		}
		fetchData();
	}, []);
	useEffect(() => {
		const banksInStatesURL = `https://shadab14meb346-indian-bank-server.glitch.me/get-list-of-states-bank-available-in?bank_name=${selectedBank}`;
		console.log(banksInStatesURL);
		async function fetchData() {
			const response = await fetch(banksInStatesURL);
			const allStates = await response.json();
			console.log(allStates);
			setStates(allStates.data);
		}
		if (selectedBank) {
			fetchData();
		}
	}, [selectedBank]);

	useEffect(() => {
		const banksInDistrictURL = `https://shadab14meb346-indian-bank-server.glitch.me/get-list-of-districts-bank-available-in?bank_name=${selectedBank}&state=${selectedState}`;
		console.log(banksInDistrictURL);
		async function fetchData() {
			const response = await fetch(banksInDistrictURL);
			const allDistricts = await response.json();
			console.log(allDistricts);
			setDistricts(allDistricts.data);
		}
		if (selectedState) {
			fetchData();
		}
	}, [selectedBank, selectedState, selectedDistrict]);

	useEffect(() => {
		const branchesInDistrictURL = `https://shadab14meb346-indian-bank-server.glitch.me/get-list-of-all-bank-branch-available-in?bank_name=${selectedBank}&state=${selectedState}&district=${selectedDistrict}`;
		console.log(branchesInDistrictURL);
		async function fetchData() {
			const response = await fetch(branchesInDistrictURL);
			const allBranches = await response.json();
			console.log(allBranches);
			setBranches(allBranches.data);
		}
		if (selectedDistrict) {
			fetchData();
		}
	}, [selectedBank, selectedState, selectedDistrict, selectedBranch]);

	useEffect(() => {
		const branchDetailsURL = `http://localhost:3001/get-bank?bank_name=${selectedBank}&state=${selectedState}&district=${selectedDistrict}&branch=${selectedBranch}`;
		async function fetchData() {
			const response = await fetch(branchDetailsURL);
			const branchDetails = await response.json();
			console.log(branchDetails);
			setBranchDetails(branchDetails.data);
		}
		if (selectedBranch) {
			fetchData();
		}
	}, [selectedBank, selectedState, selectedDistrict, selectedBranch]);
	return (
		<div>
			<h1>Banks</h1>
			<select
				id='banksName'
				onChange={(event) => {
					handleSelectedBank(event, setSelectedBank);
				}}>
				<option value='notSelected'>Select Bank Name</option>
				{banks.map((bank, index) => (
					<option value={bank._id} key={index}>
						{bank._id}
					</option>
				))}
			</select>

			<h1>States</h1>
			<select
				id='stateName'
				onChange={(event) => {
					handleSelectedState(event, setSelectedState);
				}}>
				{states.length ? null : (
					<option value='bankNotSelected'>Select a bank first</option>
				)}
				{states.length ? (
					<option value='stateNotSelected'>Select a state</option>
				) : null}
				{states.map((state, index) => (
					<option value={state} key={index}>
						{state}
					</option>
				))}
			</select>

			<h1>Districts</h1>
			<select
				id='districtName'
				onChange={(event) => {
					handleSelectedDistrict(event, setSelectedDistrict);
				}}>
				{districts.length ? null : (
					<option value='bankNotSelected'>District</option>
				)}
				{districts.length ? (
					<option value='stateNotSelected'>Select a district</option>
				) : null}
				{districts.map((district, index) => (
					<option value={district} key={index}>
						{district}
					</option>
				))}
			</select>

			<h1>Branches</h1>
			<select
				id='branchName'
				onChange={(event) => handleSelectedBranch(event, setSelectedBranch)}>
				{branches.length ? null : (
					<option value='bankNotSelected'>Branch</option>
				)}
				{branches.length ? (
					<option value='stateNotSelected'>Select a branch</option>
				) : null}
				{branches.map((branch, index) => (
					<option value={branch.name} key={index}>
						{branch}
					</option>
				))}
			</select>

			<h1>Branch Details</h1>
			<div>
				{Object.entries(branchDetails).map((element) => {
					const [key, value] = element;
					return (
						<div key={key}>
							<p>
								<b>{key}&nbsp;</b>: &nbsp;<span>{value}</span>
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Banks;
