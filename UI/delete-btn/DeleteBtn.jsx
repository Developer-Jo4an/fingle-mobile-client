import { TouchableNativeFeedback, View } from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import { clickGrayBackground, mainRedColor } from '../../styles/global'
import { styles } from './delete-btn-styles'

const ApplyBtn = ({ clickFunction, disabled }) => {

	return (
		<View style={ styles.deleteBtn(disabled) }>
			<TouchableNativeFeedback
				background={TouchableNativeFeedback.Ripple(disabled ? 'rgba(255, 255, 255, 0)' : clickGrayBackground, !disabled)}
				onPress={ disabled ? null : clickFunction }
			>
				<View style={ styles.deleteBtnWrapper }>
					<FontAwesomeIcon icon={ faTrash } size={ 24 } color={ mainRedColor }/>
				</View>
			</TouchableNativeFeedback>
		</View>
	)
}

export default ApplyBtn
