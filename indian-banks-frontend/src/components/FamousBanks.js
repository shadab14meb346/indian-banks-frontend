import React from 'react';
import '../styles/famous-banks.scss';
import bankLogos from '../util/bankLogos';
const { sbi, pnb, hdfc, icici, axis, canara } = bankLogos;

const FamousBanks = () => {
	return (
		<div className="famous-banks-container">
			<div className="famous-banks-container_item">
				<img src={sbi} />
				<span>SBI</span>
			</div>
			<div className="famous-banks-container_item">
				<img src={hdfc} />
				<span>HDFC Bank</span>
			</div>
			<div className="famous-banks-container_item">
				<img src={icici} />
				<span>ICICI Bank</span>
			</div>
			<div className="famous-banks-container_item">
				<img src={pnb} />
				<span>PNB</span>
			</div>

			<div className="famous-banks-container_item">
				<img src={axis} />
				<span>Axis Bank</span>
			</div>
			<div className="famous-banks-container_item">
				<img src={canara} />
				<span>Canara Bank</span>
			</div>
		</div>
	);
};

export default FamousBanks;
