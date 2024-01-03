import { mainGreenColor } from '../../styles/global'

export const styles = {
	story: {
		width: 120,
		height: 120,

		justifyContent: 'center',
		alignItems: 'center',

		padding: 3,

		borderStyle: 'solid',
		borderWidth: 2,
		borderColor: mainGreenColor,

		borderRadius: 30
	},
	storyWrapper: {
		flex: 1,

		overflow: 'hidden',

		borderRadius: 30
	},
	storyText: {
		textAlign: 'center'
	}
}