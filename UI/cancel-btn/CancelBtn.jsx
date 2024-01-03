import { TouchableNativeFeedback, View } from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import { mainRedColor } from '../../styles/global'
import { styles } from './cancel-btn-styles'

const CancelBtn = ({ clickFunction }) => {

	return (
		<View style={ styles.cancelBtn }>
			<TouchableNativeFeedback
				background={ TouchableNativeFeedback.Ripple() }
				onPress={ clickFunction }
			>
				<View style={ styles.cancelBtnWrapper }>
					<FontAwesomeIcon icon={ faXmark } size={ 24 } color={ mainRedColor }/>
				</View>
			</TouchableNativeFeedback>
		</View>
	)
}

export default CancelBtn
