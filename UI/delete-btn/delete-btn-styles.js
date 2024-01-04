import {mainGrayBackground} from '../../styles/global';

export const styles = {
	deleteBtn: disabled => ({
		borderRadius: 30,

		overflow: 'hidden',

		backgroundColor: '#fff',

		elevation: disabled ? 0 : 3,


		opacity: disabled ? 0.5 : 1,

		borderStyle: disabled ? 'solid' : null,
		borderWidth: disabled ? 2 : 0,
		borderColor: disabled ? mainGrayBackground : 'none',
	}),
	deleteBtnWrapper: {
		width: 80,
		height: 55,

		justifyContent: 'center',
		alignItems: 'center',
	}
}