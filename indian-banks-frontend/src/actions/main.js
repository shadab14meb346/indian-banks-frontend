import { LOADING, BANK_DETAILS, BRANCH_SELECTED } from './types';
export function loading(loading) {
	return {
		type: LOADING,
		loading: loading
	};
}

export function getBankDetails(bank) {
	return {
		type: BANK_DETAILS,
		bankDetails: bank
	};
}

export function branchSelected(value) {
	console.log('branchSelected called');
	return {
		type: BRANCH_SELECTED,
		branchSelected: value
	};
}
