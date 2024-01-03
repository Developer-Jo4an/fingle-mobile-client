import { mainGreenColor, modalWindowBackground } from '../../../../styles/global';

export const styles = {
	addAccountMWContent: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',

		backgroundColor: modalWindowBackground,
	},
	addAccountMWContentWrapper: {
		height: 380,
		justifyContent: 'space-between',

		position: 'absolute',

		borderRadius: 20,
		padding: 20,
		backgroundColor: '#fff',

		width: '90%'
	},
	addAccountForm: {
		gap: 10,
	},
	addAccountInput: {
		padding: 10,

		borderRadius: 20,

		borderStyle: 'solid',
		borderWidth: 2,
		borderColor: mainGreenColor
	},
	addAccountTypeToggle: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	addAccountTypeToggleWrapper: {
		flexDirection: 'row',
		alignItems: 'center',

		borderRadius: 20,
		overflow: 'hidden',

		backgroundColor: '#fff',

		elevation: 4,
	},
	addAccountTypeBtn: {
		width: 75,
		height: 40,

		justifyContent: 'center',
		alignItems: 'center',

		zIndex: 1
	},
	addAccountBtnText: {
		fontWeight: 600,
	},
	addAccountTypeFocus: {
		width: 75,
		height: 40,

		position: 'absolute',

		backgroundColor: mainGreenColor,

		borderRadius: 20,
	},
	addAccountEmptyAccount: {
		elevation: 2,

		backgroundColor: '#fff',

		padding: 2,

		borderRadius: 10
	},
	addAccountBtns: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	}
}