import { TouchableNativeFeedback, View } from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import { clickGrayBackground, mainRedColor, noClickColor } from '../../styles/global'
import { styles } from './cancel-btn-styles'

const CancelBtn = ({ clickFunction, disabled }) => {

	return (
		<View style={ styles.cancelBtn(disabled) }>
			<TouchableNativeFeedback
				background={ TouchableNativeFeedback.Ripple( disabled ? noClickColor : clickGrayBackground, !disabled) }
				onPress={ disabled ? null : clickFunction }
			>
				<View style={ styles.cancelBtnWrapper }>
					<FontAwesomeIcon icon={ faXmark } size={ 24 } color={ mainRedColor }/>
				</View>
			</TouchableNativeFeedback>
		</View>
	)
}

export default CancelBtn
