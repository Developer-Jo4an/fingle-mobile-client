import { TouchableNativeFeedback, View } from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import { clickGrayBackground, mainGreenColor } from '../../styles/global'
import { styles } from './apply-btn-styles'

const ApplyBtn = ({ clickFunction, disabled }) => {

	return (
		<View style={ styles.applyBtn(disabled) }>
			<TouchableNativeFeedback
				background={ TouchableNativeFeedback.Ripple(disabled ? 'rgba(255, 255, 255, 0)' : clickGrayBackground, !disabled)}
				onPress={ disabled ? null : clickFunction }
			>
				<View style={ styles.applyBtnWrapper }>
					<FontAwesomeIcon icon={ faCheck } size={ 24 } color={ mainGreenColor }/>
				</View>
			</TouchableNativeFeedback>
		</View>
	)
}

export default ApplyBtn
