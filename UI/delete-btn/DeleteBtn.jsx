import { TouchableNativeFeedback, View } from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import { clickGrayBackground, mainRedColor, noClickColor } from '../../styles/global'
import { styles } from './delete-btn-styles'

const ApplyBtn = ({ clickFunction, disabled }) => {

	return (
		<View style={ styles.deleteBtn(disabled) }>
			<TouchableNativeFeedback
				background={TouchableNativeFeedback.Ripple(disabled ? noClickColor : clickGrayBackground, !disabled)}
				onPress={ disabled ? null : clickFunction }
			>
				<View style={ styles.deleteBtnWrapper }>
					<FontAwesomeIcon icon={ faTrash } size={ 20 } color={ mainRedColor }/>
				</View>
			</TouchableNativeFeedback>
		</View>
	)
}

export default ApplyBtn
