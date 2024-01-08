import { Alert, Animated, Keyboard, TextInput, View } from 'react-native'
import { useRef, useState } from 'react'
import ModalWindowCenterHeader from '../../../../components/modal-windows/modal-window-center/modal-window-center-header/ModalWindowCenterHeader'
import Account from '../../../../components/account/Account'
import ApplyBtn from '../../../../UI/apply-btn/ApplyBtn'
import CancelBtn from '../../../../UI/cancel-btn/CancelBtn'
import TransparentLoaderStyles from '../../../../components/loaders/transparent-loader/transparentLoader'

import axios from 'axios'
import { useHomeContext } from '../../general/HomeProvider'
import { getCommonPath, userId, windowHeight } from '../../../../functions/functions'
import { useAppContext } from '../../../../AppProvider'

import {
	hideKeyboardLogic,
	hideModalWindow,
	showKeyboardLogic,
	styles,
	switchTypeFunction,
	typeToggleBtn
} from '../account-logic/account-logic'

const AddAccountMW = () => {
	const { user } = useAppContext()
	const [_, userDispatch] = user

	const { addAccountMW, newAccount } = useHomeContext()
	const [newAccountState, newAccountDispatch] = newAccount

	const [loader, setLoader] = useState(false)

	const newAccountNameRef = useRef()
	const newAccountCountRef = useRef()
	const typeSwitch = useRef(new Animated.Value(0)).current
	const modalWindowPosition = useRef(new Animated.Value((windowHeight - 400) / 2)).current

	const callTypeSwitchFunction = (type, isReset) => switchTypeFunction.bind([newAccountState, newAccountDispatch, typeSwitch])(type, isReset)

	Keyboard.addListener('keyboardDidShow', showKeyboardLogic.bind(modalWindowPosition))
	Keyboard.addListener('keyboardDidHide', hideKeyboardLogic.bind(modalWindowPosition))

	const saveAccount = async () => {

		const showAlert = message => { Alert.alert('Error', message); return null }

		try {
			const { accountName, accountType, count } = newAccountState
			if (typeof accountName !== 'string' || accountName.length < 1 || accountName.length > 30) return showAlert('Invalid name')
			if (accountType !== 'cash' && accountType !== 'card') return showAlert('Invalid type')
			if (count.toString().length > 13 || typeof count !== 'number') return showAlert('Invalid count')

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
		callTypeSwitchFunction('cash', true)
		if (newAccountNameRef.current) newAccountNameRef.current.clear()
		if (newAccountCountRef.current) newAccountCountRef.current.clear()
	}

	return (
		<View style={ styles.accountMWContent }>
			<Animated.View style={ styles.accountMWContentWrapper(modalWindowPosition) }>
				<ModalWindowCenterHeader header={'Add account'} clickFunc={() => hideModalWindow(newAccountDispatch, null, addAccountMW, true)}/>
				<View style={ styles.accountForm }>
					<TextInput
						maxLength={ 30 }
						ref={ newAccountNameRef }
						style={ styles.accountInput }
						placeholder={'Name'}
						onChangeText={ text => newAccountDispatch({ type: 'set-name', accountName: text }) }
					/>
					<TextInput
						maxLength={ 13 }
						ref={ newAccountCountRef }
						style={ styles.accountInput }
						placeholder={'Count'}
						keyboardType={'numeric'}
						onChangeText={ text => newAccountDispatch({ type: 'set-count', count: +text }) }
					/>
					<View style={ styles.accountTypeToggle }>
						<View style={ styles.accountTypeToggleWrapper('none') }>
							{ typeToggleBtn('cash', callTypeSwitchFunction, typeSwitch) }
							{ typeToggleBtn('card', callTypeSwitchFunction, typeSwitch) }
							<Animated.View style={ styles.accountTypeFocus(typeSwitch) }></Animated.View>
						</View>
					</View>
					<View style={ styles.accountEmptyAccount }><Account account={ newAccountState } clickFunction={() => {}} disabled={ true }/></View>
				</View>
				<View style={ styles.accountBtns }>
					<ApplyBtn clickFunction={ saveAccount }/>
					<CancelBtn clickFunction={ toDefaultAccount }/>
				</View>
			</Animated.View>
			<TransparentLoaderStyles visible={ loader }/>
		</View>
	)
}

export default AddAccountMW