import { LOADING, BANK_DETAILS, BRANCH_SELECTED } from '../actions/types';

export default function (
	state = {
		loading: true,
		bankDetails: {},
		branchSelected: false
	},
	action
) {
	switch (action.type) {
		case LOADING: {
			return {
				...state,
				loading: action.loading
			};
		}
		case BANK_DETAILS: {
			return {
				...state,
				bankDetails: action.bankDetails
			};
		}
		case BRANCH_SELECTED: {
			return {
				...state,
				branchSelected: action.branchSelected
			};
		}
		default: {
			return state;
		}
	}
}
