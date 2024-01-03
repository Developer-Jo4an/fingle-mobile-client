import { ActivityIndicator, Modal, View } from 'react-native'

import { styles } from './transparent-loader-styles'
import { mainGreenColor } from '../../../styles/global';

const TransparentLoaderStyles = ({ visible }) => {
	if (!visible) return null

	return (
		<Modal
			transparent
			visible={ visible }
		>
			<View style={ styles.transparentLoaderWrapper }>
				<ActivityIndicator color={ mainGreenColor } size={'large'}/>
			</View>
		</Modal>
	)
}

export default TransparentLoaderStyles