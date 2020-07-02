import React from 'react';
import '../styles/famous-banks.scss';
import bankLogos from '../util/bankLogos';
const { sbi, pnb, hdfc, icici, axis, canara } = bankLogos;

const FamousBanks = ({ setSelectedBank, resetStates }) => {
	const handleClick = (selectedBank) => {
		resetStates();
		setSelectedBank(selectedBank);
	};
	return (
		<div className="famous-banks-container">
			<div
				className="famous-banks-container_item"
				onClick={() => {
					handleClick(sbi.fullName);
				}}>
				<img src={sbi.logoURL} />
				<span>SBI</span>
			</div>

			<div
				className="famous-banks-container_item"
				onClick={() => {
					handleClick(hdfc.fullName);
				}}>
				<img src={hdfc.logoURL} />
				<span>HDFC Bank</span>
			</div>

			<div
				className="famous-banks-container_item"
				onClick={() => {
					handleClick(icici.fullName);
				}}>
				<img src={icici.logoURL} />
				<span>ICICI Bank</span>
			</div>

			<div
				className="famous-banks-container_item"
				onClick={() => {
					handleClick(pnb.fullName);
				}}>
				<img src={pnb.logoURL} />
				<span>PNB</span>
			</div>

			<div
				className="famous-banks-container_item"
				onClick={() => {
					handleClick(axis.fullName);
				}}>
				<img src={axis.logoURL} />
				<span>Axis Bank</span>
			</div>

			<div
				className="famous-banks-container_item"
				onClick={() => {
					handleClick(canara.fullName);
				}}>
				<img src={canara.logoURL} />
				<span>Canara Bank</span>
			</div>
		</div>
	);
};

export default FamousBanks;
