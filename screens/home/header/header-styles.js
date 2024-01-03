import { mainGoldColor, mainGreenColor } from '../../../styles/global';

export const styles = {
	header: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: 20,

		padding: 10,

		backgroundColor: '#fff',

		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
	},
	headerUserInfo: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
	},
	headerImgWrapper: level => ({
		padding: 2,

		borderColor: level === 'Standard' ? mainGreenColor : mainGoldColor,
		borderWidth: 2,
		borderStyle: 'solid',
		borderRadius: 35,
	}),
	headerUserInfoWrapper: {
		justifyContent: 'center',
		alignItems: 'flex-start',
		alignSelf: 'stretch',
		gap: 5
	},
	headerUserInfoNickname: {
		fontWeight: 600,
		fontSize: 18
	},
	headerUserSubscriptionLevel: {
		paddingTop: 3,
		paddingBottom: 3,
		paddingLeft: 10,
		paddingRight: 10,

		borderRadius: 20,
	},
	headerUserSubscriptionLevelText: {
		color: '#fff',
		fontWeight: 600,
		fontSize: 16
	},
	headerUserSubscriptionLevelGradient: {
		borderRadius: 30,
		overflow: 'hidden'
	},
	headerButtons: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10
	},
	headerBorderButtonClickEffect: {
		borderRadius: 20,
		overflow: 'hidden'
	},
	headerButtonWrapper: {
		width: 40,
		height: 40,

		justifyContent: 'center',
		alignItems: 'center',
	},
}
