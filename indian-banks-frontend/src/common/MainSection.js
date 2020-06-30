import React from 'react';
import BankSection from './BankSection.js';
import IllustrationSection from './IllustrationSection';
import '../styles/main-section.scss';
const MainSection = () => {
	return (
		<section className="section">
			<BankSection />
			<IllustrationSection />
		</section>
	);
};

export default MainSection;
