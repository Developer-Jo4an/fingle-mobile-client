import { View, Text, TouchableNativeFeedback } from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigation } from '@react-navigation/native'

import { styles } from './screen-header-styles'

export default function ScreenHeader ({ children }) {

	const navigation = useNavigation()

	return (
		<View style={ styles.screenHeaderStyles }>
			<View style={ styles.screenHeaderBackBtnWrapper }>
				<TouchableNativeFeedback
					background={ TouchableNativeFeedback.Ripple() }
					onPress={() => navigation.goBack()}
				>
					<View style={ styles.screenHeaderBackBtn } >
						<FontAwesomeIcon icon={ faArrowLeft } size={20}/>
					</View>
				</TouchableNativeFeedback>
			</View>
			<Text style={ styles.screenHeaderTextStyles }>{ children }</Text>
		</View>
	)
}
