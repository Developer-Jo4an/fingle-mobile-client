import { ActivityIndicator, View, Text } from 'react-native'

import { opaqueLoaderStyles } from './opaque-loader-styles'

export default function OpaqueLoader ()  {
	return (
		<View style={ opaqueLoaderStyles }>
			<ActivityIndicator/>
			<Text>Loading...</Text>
		</View>
	)

}

