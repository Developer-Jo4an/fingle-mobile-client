import { Pressable, View, Text } from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import { styles } from './modal-window-center-header-styles'

const ModalWindowCenterHeader = ({ header, clickFunc }) => {
	return (
		<View style={ styles.modalWindowCenterHeader }>
			<Text style={ styles.modalWindowCenterHeaderText }>{ header }</Text>
			<Pressable
				onPress={ clickFunc }
				style={({ pressed }) => [
					{ opacity: 1 },
					{ opacity: pressed ? 0.5 : 1 }
				]}
			><FontAwesomeIcon icon={ faXmark } size={24}/></Pressable>
		</View>
	)
}

export default ModalWindowCenterHeader