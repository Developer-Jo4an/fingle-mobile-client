import { TouchableNativeFeedback, View, Text } from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import { styles } from './add-btn'

const AddBtn = ({ clickFunction }) => {
    return (
        <View style={ styles.addBtn }>
            <TouchableNativeFeedback
                background={ TouchableNativeFeedback.Ripple() }
                onPress={ clickFunction }
            >
                <View style={ styles.addBtnWrapper }>
                    <Text style={ styles.addBtnText }>Add</Text>
                    <View><FontAwesomeIcon icon={ faPlus } color={'#fff'} size={14}/></View>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

export default AddBtn