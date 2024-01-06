import { mainGreenColor, modalWindowBackground } from '../../../../styles/global'

export const styles = {
	budgetMWContent: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',

		backgroundColor: modalWindowBackground,
    },
	budgetMWContentWrapper: {
		width: '90%',

		justifyContent: 'space-between',
		gap: 20,

		position: 'absolute',

		borderRadius: 20,

		paddingTop: 20,
		paddingBottom: 20,

		backgroundColor: '#fff',
	},
	budgetHeaderWrapper: {
		paddingLeft: 20,
		paddingRight: 20,
	},
	budgetForm: {
		gap: 10,
	},
	budgetSignNameWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,

		paddingLeft: 20,
		paddingRight: 20,
	},
	budgetCountWrapper: {
		paddingLeft: 20,
		paddingRight: 20
	},
	budgetSign: backColor => ({
		width: 60,
		height: 60,

		justifyContent: 'center',
		alignItems: 'center',

		borderRadius: 10,

		overflow: 'hidden',

		backgroundColor: backColor
	}),
	budgetInput: {
		height: 60,

		flexGrow: 1,
		flexShrink: 1,

		paddingLeft: 10,
		paddingRight: 10,

		borderRadius: 20,

		borderStyle: 'solid',
		borderWidth: 2,
		borderColor: mainGreenColor
	},
	budgetSelectedCategoriesContent: {
		paddingLeft: 20,
		paddingRight: 20,

		gap: 10
	}
}