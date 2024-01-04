import { Animated, Keyboard, Pressable, TextInput, View } from 'react-native'
import { useRef, useState } from 'react'
import ModalWindowCenterHeader from '../../../../components/modal-windows/modal-window-center/modal-window-center-header/ModalWindowCenterHeader';
import Account from '../../../../components/account/Account'
import ApplyBtn from '../../../../UI/apply-btn/ApplyBtn'
import CancelBtn from '../../../../UI/cancel-btn/CancelBtn'
import TransparentLoaderStyles from '../../../../components/loaders/transparent-loader/transparentLoader'
import DeleteBtn from '../../../../UI/delete-btn/DeleteBtn'

import { useHomeContext } from '../../general/HomeProvider'
import { windowHeight } from '../../../../AppProvider'

import { styles } from '../add-account-mw/add-account-mw-styles'

const ModifiedAccountMW = () => {

    const { modifiedAccountMW, modifiedAccount, modifiedAccountCopy } = useHomeContext()
    const [modifiedAccountState, modifiedAccountDispatch] = modifiedAccount
    const { _id } = modifiedAccountState


    const modifiedAccountNameRef = useRef()
    const modifiedAccountCountRef = useRef()

    const typeSwitch = useRef(new Animated.Value(modifiedAccountState.accountType === 'cash' ? 0 : 75)).current
    const modalWindowPosition = useRef(new Animated.Value((windowHeight - 400) / 2)).current

    const [loader, setLoader] = useState(false)

    const switchTypeFunction = type => {
        if (type === modifiedAccountState.accountType) return null

        Animated.timing(typeSwitch, {
            toValue: modifiedAccountState.accountType === 'cash' ? 75 : 0,
            duration: 150,
            useNativeDriver: false
        }).start()
        modifiedAccountDispatch({ type: 'set-type', accountType: type })
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

    Keyboard.addListener('keyboardDidHide', () => {
        Animated.timing(modalWindowPosition, {
            toValue: (windowHeight - 400) / 2,
            duration: 200,
            useNativeDriver: false
        }).start()
    })

    const saveModifiedAccount = () => {

    }

    const toDefaultAccount = () => {
        modifiedAccountDispatch({ type: 'set-account', account: modifiedAccountCopy[0] })
        switchTypeFunction(modifiedAccountCopy[0].accountType)
    }

    const deleteAccount = () => {

    }

    return (
        <View style={ styles.addAccountMWContent }>
            <Animated.View style={{ ...styles.addAccountMWContentWrapper, top: modalWindowPosition }}>
                <ModalWindowCenterHeader header={'Modified account'} clickFunc={() => modifiedAccountMW[1](false) }/>
                <View style={ styles.addAccountForm }>
                    <TextInput
                        ref={ modifiedAccountNameRef }
                        style={ styles.addAccountInput }
                        placeholder={'Name'}
                        defaultValue={ modifiedAccountState.accountName }
                        onChangeText={ text => modifiedAccountDispatch({ type: 'set-name', accountName: text }) }
                    />
                    <TextInput
                        ref={ modifiedAccountCountRef }
                        style={ styles.addAccountInput }
                        placeholder={'Count'}
                        defaultValue={ modifiedAccountState.count.toString() === '0' ? '' : modifiedAccountState.count.toString() }
                        keyboardType='numeric'
                        onChangeText={ text => modifiedAccountDispatch({ type: 'set-count', count: +text }) }
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
                    <View style={ styles.addAccountEmptyAccount }><Account account={ modifiedAccountState } clickFunction={() => {}}/></View>
                </View>
                <View style={ styles.addAccountBtns }>
                    <ApplyBtn clickFunction={ saveModifiedAccount }/>
                    <CancelBtn clickFunction={ toDefaultAccount }/>
                    <DeleteBtn clickFunction={ deleteAccount } disabled={ _id === '260627062003200315265252' }/>
                </View>
            </Animated.View>
            <TransparentLoaderStyles visible={ loader }/>
        </View>
    )
}

export default ModifiedAccountMW