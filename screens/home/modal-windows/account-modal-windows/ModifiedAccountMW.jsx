import { Alert, Animated, Keyboard, TextInput, View } from 'react-native'
import { useRef, useState } from 'react'
import ModalWindowCenterHeader from '../../../../components/modal-windows/modal-window-center/modal-window-center-header/ModalWindowCenterHeader'
import Account from '../../../../components/account/Account'
import ApplyBtn from '../../../../UI/apply-btn/ApplyBtn'
import CancelBtn from '../../../../UI/cancel-btn/CancelBtn'
import TransparentLoaderStyles from '../../../../components/loaders/transparent-loader/transparentLoader'
import DeleteBtn from '../../../../UI/delete-btn/DeleteBtn'

import axios from 'axios'
import { useHomeContext } from '../../general/HomeProvider'
import {useAppContext, windowHeight} from '../../../../AppProvider'
import { ENCRYPTEDID, getCommonPath, userId } from '../../../../functions/functions'

import {
	hideKeyboardLogic,
	hideModalWindow,
	showKeyboardLogic,
	styles,
	switchTypeFunction,
	typeToggleBtn
} from '../account-logic/account-logic'

const ModifiedAccountMW = () => {
	const { user } = useAppContext()
	const [_, userDispatch] = user

    const { modifiedAccountMW, modifiedAccount, modifiedAccountCopy } = useHomeContext()
    const [modifiedAccountState, modifiedAccountDispatch] = modifiedAccount

	const disabled = modifiedAccountState._id === ENCRYPTEDID

    const modifiedAccountNameRef = useRef()
    const modifiedAccountCountRef = useRef()
    const typeSwitch = useRef(new Animated.Value(modifiedAccountState.accountType === 'cash' ? 0 : 75)).current
    const modalWindowPosition = useRef(new Animated.Value((windowHeight - 400) / 2)).current

	const [loader, setLoader] = useState(false)

	const callTypeSwitchFunction = (type, isReset) => switchTypeFunction.bind([modifiedAccountState, modifiedAccountDispatch, typeSwitch])(type, isReset)

    Keyboard.addListener('keyboardDidShow', showKeyboardLogic.bind(modalWindowPosition))
    Keyboard.addListener('keyboardDidHide', hideKeyboardLogic.bind(modalWindowPosition))

    const toDefaultAccount = () => {
        modifiedAccountDispatch({ type: 'set-account', account: modifiedAccountCopy[0] })
	    callTypeSwitchFunction(modifiedAccountCopy[0].accountType, true)
    }

	const saveModifiedAccount = async () => {

		const showAlert = message => { Alert.alert('Error', message); return null }

		try {
			const { _id, accountName, accountType, count } = modifiedAccountState

			if (typeof accountName !== 'string' || accountName.length < 1 || accountName.length > 30) return showAlert('Invalid name')
			if (accountType !== 'cash' && accountType !== 'card') return showAlert('Invalid type')
			if (count.toString().length > 13 || typeof count !== 'number') return showAlert('Invalid count')
			if (!_id ) return showAlert('Invalid _id, please try later')
			if (_id === ENCRYPTEDID && accountType !== 'cash') return showAlert('This account type cannot be changed')
			let sameCount = 0
			for (const key in modifiedAccountState) if (modifiedAccountState[key] !== modifiedAccountCopy[0][key]) sameCount++
			if (!sameCount) return showAlert('Make changes')

			setLoader(true)

			const userData = await axios.put(`${getCommonPath}/${userId}/modified-account`, { account: modifiedAccountState })
			const { data } = userData

			if (data.status) userDispatch({ type: 'set-accounts', accounts: data.accounts })
			else throw new Error(data.message)
		}
		catch (e) { Alert.alert('Error', e.message) }
		finally {
			modifiedAccountDispatch({ type: 'reload-modified-account' })
			modifiedAccountCopy[1]({ _id: 'none', accountName: '', count: 0, accountType: 'cash' })
			setLoader(false)
			modifiedAccountMW[1](false)
		}
	}

	const deleteAccount = async () => {
		try {
			const { _id } = modifiedAccountState
			if ( _id === ENCRYPTEDID ) { Alert.alert('Error', 'This account cannot be deleted'); return null }

			setLoader(true)

			const userData = await axios.delete(`${getCommonPath}/${userId}/delete-account/${_id}`)
			const { data } = userData

			if (data.status) userDispatch({ type: 'set-accounts', accounts: data.accounts })
			else throw new Error(data.message)
		}
		catch (e) { Alert.alert('Error', e.message) }
		finally {
			modifiedAccountDispatch({ type: 'reload-modified-account' })
			modifiedAccountCopy[1]({ _id: 'none', accountName: '', count: 0, accountType: 'cash' })
			setLoader(false)
			modifiedAccountMW[1](false)
		}
	}

    return (
        <View style={ styles.accountMWContent }>
            <Animated.View style={ styles.accountMWContentWrapper(modalWindowPosition) }>
                <ModalWindowCenterHeader header={'Modified account'} clickFunc={() => hideModalWindow(modifiedAccountDispatch, modifiedAccountCopy, modifiedAccountMW, false)}/>
                <View style={ styles.accountForm }>
                    <TextInput
	                    maxLength={ 30 }
                        ref={ modifiedAccountNameRef }
                        style={ styles.accountInput }
                        placeholder={'Name'}
                        defaultValue={ modifiedAccountState.accountName }
                        onChangeText={ text => modifiedAccountDispatch({ type: 'set-name', accountName: text }) }
                    />
                    <TextInput
	                    maxLength={ 13 }
                        ref={ modifiedAccountCountRef }
                        style={ styles.accountInput }
                        placeholder={'Count'}
                        defaultValue={ modifiedAccountState.count.toString() !== '0' ? modifiedAccountState.count.toString() : '' }
                        keyboardType={'numeric'}
                        onChangeText={ count => modifiedAccountDispatch({ type: 'set-count', count: +count }) }
                    />
                    <View style={ styles.accountTypeToggle }>
                        <View style={ styles.accountTypeToggleWrapper(disabled) }>
	                        { typeToggleBtn('cash', callTypeSwitchFunction, typeSwitch, disabled ? 'no-touch' : 'touch') }
	                        { typeToggleBtn('card', callTypeSwitchFunction, typeSwitch, disabled ? 'no-touch' : 'touch') }
                            <Animated.View style={ styles.accountTypeFocus(typeSwitch) }></Animated.View>
                        </View>
                    </View>
                    <View style={ styles.accountEmptyAccount }><Account account={ modifiedAccountState } clickFunction={() => {}} disabled={ true }/></View>
                </View>
                <View style={ styles.accountBtns }>
                    <ApplyBtn clickFunction={ saveModifiedAccount }/>
                    <CancelBtn clickFunction={ toDefaultAccount }/>
                    <DeleteBtn clickFunction={ deleteAccount } disabled={ disabled }/>
                </View>
            </Animated.View>
            <TransparentLoaderStyles visible={ loader }/>
        </View>
    )
}

export default ModifiedAccountMW