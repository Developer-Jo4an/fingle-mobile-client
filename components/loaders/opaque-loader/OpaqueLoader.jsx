import { ActivityIndicator, View, Text } from 'react-native'

import { OpaqueLoaderStyles } from './OpaqueLoaderStyles'

export default function OpaqueLoader ()  {
	return (
		<View style={OpaqueLoaderStyles}>
			<ActivityIndicator/>
			<Text>Loading...</Text>
		</View>
	)

}

