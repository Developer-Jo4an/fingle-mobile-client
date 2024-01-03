import {TouchableNativeFeedback, View, Text, Alert} from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'

import { mainGreenColor, mainGreenDarkColor } from '../../styles/global';
import { styles } from './account-styles'

const Account = ({ account, clickFunction }) => {

    const { _id, accountName, accountType, count } = account

    const accountSignContent = () => {
        const accountSignLogic = {
            card: <>
                <View style={ styles.accountSignCardType }></View>
                <View style={ styles.accountSignCardNumber }></View>
            </>,
            cash: <Text style={ styles.accountSignCash }>$</Text>
        }
        return accountSignLogic[accountType]
    }

    return (
        <View style={ styles.account }>
            <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple()}
                onPress={ clickFunction }
            >
                <View style={ styles.accountInfoWrapper }>
                    <View style={ styles.accountInfoLeftSection }>

                        <LinearGradient
                            colors={[mainGreenColor, mainGreenDarkColor]}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 1 }}
                            style={ styles.accountSign }
                        >{ accountSignContent() }</LinearGradient>
                        <Text style={ styles.accountName }>{ accountName }</Text>
                    </View>
                    <View style={ styles.accountCountWrapper }><Text style={ styles.accountCountValue(count) }>{ count } $</Text></View>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

export default Account