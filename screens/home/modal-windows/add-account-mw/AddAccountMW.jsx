import { Alert, Animated, Keyboard, Pressable, TextInput, View } from 'react-native'
import { useRef, useState } from 'react'
import ModalWindowCenterHeader from '../../../../components/modal-windows/modal-window-center/modal-window-center-header/ModalWindowCenterHeader'
import Account from '../../../../components/account/Account'
import ApplyBtn from '../../../../UI/apply-btn/ApplyBtn'
import CancelBtn from '../../../../UI/cancel-btn/CancelBtn'
import TransparentLoaderStyles from '../../../../components/loaders/transparent-loader/transparentLoader'

import axios from 'axios'
import { useHomeContext } from '../../general/HomeProvider'
import { getCommonPath, userId } from '../../../../functions/functions'
import { useAppContext, windowHeight} from '../../../../AppProvider'

import { styles } from './add-account-mw-styles'

const AddAccountMW = () => {
	const { user } = useAppContext()
	const [_, userDispatch] = user

	const { addAccountMW, newAccount } = useHomeContext()
	const [newAccountState, newAccountDispatch] = newAccount

	const newAccountNameRef = useRef()
	const newAccountCountRef = useRef()

	const typeSwitch = useRef(new Animated.Value(0)).current
	const modalWindowPosition = useRef(new Animated.Value((windowHeight - 400) / 2)).current

	const [loader, setLoader] = useState(false)

	const switchTypeFunction = type => {
		if (type === newAccountState.accountType) return null

		Animated.timing(typeSwitch, {
			toValue: newAccountState.accountType === 'cash' ? 75 : 0,
			duration: 150,
			useNativeDriver: false
		}).start()
		newAccountDispatch({ type: 'set-type', accountType: type })
	}

	const typeBtnStyle = type => ({
		...styles.addAccountBtnText,
		color: typeSwitch.interpolate({
			inputRange: [0, 75],
			outputRange: type === 'cash' ? ['#fff', '#000'] : ['#000', '#fff']
		})
	})

	Keyboard.addListener('keyboardDidShow', e => {
		const keyBoardHeight = e.endCoordinates.height
		const padding = ((windowHeight - keyBoardHeight - 400) / 2).toFixed(0)

		Animated.timing(modalWindowPosition, {
			toValue: padding,
			duration: 200,
			useNativeDriver: false
		}).start()
	})

	Keyboard.addListener('keyboardDidHide', e => {
		Animated.timing(modalWindowPosition, {
			toValue: (windowHeight - 400) / 2,
			duration: 200,
			useNativeDriver: false
		}).start()
	})

	const saveAccount = async () => {
		try {
			const { accountName, accountType, count } = newAccountState
			if (typeof accountName !== 'string' || accountName.length < 1 || accountName.length > 30) { Alert.alert('Error', 'Invalid name'); return null }
			if (accountType !== 'cash' && accountType !== 'card') { Alert.alert('Error', 'Invalid type'); return null }
			if (count.toString().length > 13 || typeof count !== 'number') { Alert.alert('Error', 'Invalid count'); return null }

			setLoader(true)

			const userData = await axios.post(`${getCommonPath}/${userId}/add-account`, { account: newAccountState })
			const { data } = userData

			if (data.status) userDispatch({ type: 'set-accounts', accounts: data.accounts })
			else throw new Error(data.message)
		}
		catch (e) { Alert.alert('Error', e.message) }
		finally {
			addAccountMW[1](false)
			newAccountDispatch({ type: 'reload-account' })
			setLoader(false)
		}

	}

	const toDefaultAccount = () => {
		newAccountDispatch({ type: 'reload-account' })
		switchTypeFunction('cash')
		if (newAccountNameRef.current) newAccountNameRef.current.clear()
		if (newAccountCountRef.current) newAccountCountRef.current.clear()
	}

	return (
		<View style={ styles.addAccountMWContent }>
			<Animated.View style={{ ...styles.addAccountMWContentWrapper, top: modalWindowPosition }}>
				<ModalWindowCenterHeader header={'Add account'} clickFunc={() => addAccountMW[1](false) }/>
				<View style={ styles.addAccountForm }>
					<TextInput
						ref={ newAccountNameRef }
						style={ styles.addAccountInput }
						placeholder={'Name'}
						onChangeText={ text => newAccountDispatch({ type: 'set-name', accountName: text }) }
					/>
					<TextInput
						ref={ newAccountCountRef }
						style={ styles.addAccountInput }
						placeholder={'Count'}
						keyboardType='numeric'
						onChangeText={ text => newAccountDispatch({ type: 'set-count', count: +text }) }
					/>
					<View style={ styles.addAccountTypeToggle }>
						<View style={ styles.addAccountTypeToggleWrapper }>
							<Pressable
								style={{ ...styles.addAccountTypeBtn, borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }}
								onPress={() => switchTypeFunction('cash')}
							><Animated.Text style={ typeBtnStyle('cash') }>CASH</Animated.Text>
							</Pressable>
							<Pressable
								style={ { ...styles.addAccountTypeBtn, borderTopRightRadius: 20, borderBottomRightRadius: 20 } }
								onPress={() => switchTypeFunction('card')}
							><Animated.Text style={ typeBtnStyle('card') }>CARD</Animated.Text>
							</Pressable>
							<Animated.View style={{...styles.addAccountTypeFocus, transform: [{ translateX: typeSwitch }] }}></Animated.View>
						</View>
					</View>
					<View style={ styles.addAccountEmptyAccount }><Account account={ newAccountState }/></View>
				</View>
				<View style={ styles.addAccountBtns }>
					<ApplyBtn clickFunction={ saveAccount }/>
					<CancelBtn clickFunction={ toDefaultAccount }/>
				</View>
			</Animated.View>
			<TransparentLoaderStyles visible={ loader }/>
		</View>
	)
}

export default AddAccountMW