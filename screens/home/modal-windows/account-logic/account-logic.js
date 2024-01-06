import {Animated, Pressable, StatusBar} from 'react-native'

import { windowHeight } from '../../../../AppProvider'
import { platform } from '../../../../functions/functions'

import { mainGreenColor, modalWindowBackground } from '../../../../styles/global'

export const styles = {
	accountMWContent: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',

		backgroundColor: modalWindowBackground,
	},
	accountMWContentWrapper: modalWindowPosition => ({
		width: '90%',
		height: 400,
		justifyContent: 'space-between',

		position: 'absolute',
		top: modalWindowPosition,

		borderRadius: 20,
		padding: 20,
		backgroundColor: '#fff',
	}),
	accountForm: {
		gap: 10,
	},
	accountInput: {
		height: 60,

		flexGrow: 1,
		flexShrink: 1,

		paddingLeft: 10,
		paddingRight: 10,

		borderRadius: 20,

		borderStyle: 'solid',
		borderWidth: 2,
		borderColor: mainGreenColor,
	},
	accountTypeToggle: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	accountTypeToggleWrapper: disabled => ({
		flexDirection: 'row',
		alignItems: 'center',

		borderRadius: 20,

		overflow: 'hidden',

		backgroundColor: '#fff',

		elevation: 4,

		opacity: disabled === 'none' ? 1 : disabled ? 0.5 : 1
	}),
	accountTypeBtn: {
		width: 75,
		height: 40,

		justifyContent: 'center',
		alignItems: 'center',

		zIndex: 1
	},
	accountBtnText: {
		fontWeight: 600,
	},
	accountTypeFocus: typeSwitch => ({
		width: 75,
		height: 40,

		position: 'absolute',

		backgroundColor: mainGreenColor,

		borderRadius: 20,

		transform: [{ translateX: typeSwitch }]
	}),
	accountEmptyAccount: {
		elevation: 2,

		backgroundColor: '#fff',

		padding: 2,

		borderRadius: 10
	},
	accountBtns: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	}
}

export function showKeyboardLogic (e) {
	const keyBoardHeight = e.endCoordinates.height
	const padding = ((windowHeight - keyBoardHeight - 400) / 2).toFixed(0)

	Animated.timing(this, {
		toValue: padding >= 0 ? padding : platform === 'android' ? StatusBar.currentHeight + 10 : 10,
		duration: 200,
		useNativeDriver: false
	}).start()
}

export function hideKeyboardLogic () {
	Animated.timing(this, {
		toValue: (windowHeight - 400) / 2,
		duration: 200,
		useNativeDriver: false
	}).start()
}

export function switchTypeFunction (type, isReset) {
	const [state, setState, typeSwitch] = this
	if (type === state.accountType) return null

	Animated.timing(typeSwitch, {
		toValue: state.accountType === 'cash' ? 75 : 0,
		duration: 150,
		useNativeDriver: false
	}).start()
	if (!isReset) setState({ type: 'set-type', accountType: type })
}

export const typeBtnStyle = (type, typeSwitch) => ({
	...styles.accountBtnText,
	color: typeSwitch.interpolate({
		inputRange: [0, 75],
		outputRange: type === 'cash' ? ['#fff', '#000'] : ['#000', '#fff']
	})
})

export const typeToggleBtn = (type, callTypeSwitchFunction, typeSwitch, isTouching) => (
	<Pressable
		style={ styles.accountTypeBtn }
		onPress={ isTouching === 'touch' || isTouching === undefined ? () => callTypeSwitchFunction(type) : () => {} }
	><Animated.Text style={ typeBtnStyle(type, typeSwitch) }>{ type.toUpperCase() }</Animated.Text>
	</Pressable>
)

export const hideModalWindow = (mainStateDispatch, copyStateDispatch, MWSetState, isAdd) => {
	mainStateDispatch({ type: isAdd ? 'reload-account' : 'reload-modified-account' })
	if (copyStateDispatch) copyStateDispatch[1]({ _id: 'none', accountName: '', count: 0, accountType: 'cash' })
	MWSetState[1](false)
}