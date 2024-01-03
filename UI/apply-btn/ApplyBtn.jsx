import { TouchableNativeFeedback, View } from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import { mainGreenColor } from '../../styles/global'
import { styles } from './apply-btn-styles'

const ApplyBtn = ({ clickFunction }) => {

	return (
		<View style={ styles.applyBtn }>
			<TouchableNativeFeedback
				background={TouchableNativeFeedback.Ripple()}
				onPress={ clickFunction }
			>
				<View style={ styles.applyBtnWrapper }>
					<FontAwesomeIcon icon={ faCheck } size={ 24 } color={ mainGreenColor }/>
				</View>
			</TouchableNativeFeedback>
		</View>
	)
}

export default ApplyBtn
