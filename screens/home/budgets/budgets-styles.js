import { mainGrayBackground, mainGreenColor } from '../../../styles/global'

export const styles = {
	noBudgetArea: {
		backgroundColor: mainGrayBackground,

		padding: 10,

		borderRadius: 20
	},
	noBudgetAddBtn: {
		height: 100,

		backgroundColor: '#fff',

		borderRadius: 10,

		overflow: 'hidden'
	},
	noBudgetAddWrapper: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		gap: 10,

		borderRadius: 10
	},
	noBudgetPlusSignWrapper: {
		width: 30,
		height: 30,

		alignItems: 'center',
		justifyContent: 'center',

		borderRadius: 15,

		borderStyle: 'dashed',
		borderWidth: 2,
		borderColor: mainGreenColor,
	},
	noBudgetAddText: {
		color: mainGreenColor
	}
}