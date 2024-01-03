import { TouchableNativeFeedback, View } from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import { mainRedColor } from '../../styles/global'
import { styles } from './delete-btn-styles'

const ApplyBtn = ({ clickFunction }) => {

	return (
		<View style={ styles.deleteBtn }>
			<TouchableNativeFeedback
				background={TouchableNativeFeedback.Ripple()}
				onPress={ clickFunction }
			>
				<View style={ styles.deleteBtnWrapper }>
					<FontAwesomeIcon icon={ faTrash } size={ 24 } color={ mainRedColor }/>
				</View>
			</TouchableNativeFeedback>
		</View>
	)
}

export default ApplyBtn
