import { ActivityIndicator, View, Text } from 'react-native'

import { mainGreenColor } from '../../../styles/global'
import { opaqueLoaderStyles } from './opaque-loader-styles'

export default function OpaqueLoader ()  {
	return (
		<View style={ opaqueLoaderStyles }>
			<ActivityIndicator color={ mainGreenColor }/>
			<Text>Loading...</Text>
		</View>
	)

}

