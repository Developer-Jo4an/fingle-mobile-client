import { mainGrayBackground } from '../../styles/global'

export const styles = {
	category: (animation, color) => ({
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,

		paddingTop: 6,
		paddingBottom: 6,
		paddingLeft: 8,
		paddingRight: 8,

		borderRadius: 16,

		backgroundColor: animation.interpolate({
			inputRange: [0, 1],
			outputRange: [mainGrayBackground, color]
		})
	}),
	categorySignWrapper: (animation, color) => ({
		justifyContent: 'center',
		alignItems: 'center',

		borderRadius: 12,

		padding: 8,

		backgroundColor: animation.interpolate({
			inputRange: [0, 1],
			outputRange: [color, '#fff']
		})
	}),
	categoryName: animation => ({
		color: animation.interpolate({
			inputRange: [0, 1],
			outputRange: ['#000', '#fff']
		})
	}),
	animationIcon: animation => ({
		position: 'absolute',

		opacity: animation,

		zIndex: 1
	})
}