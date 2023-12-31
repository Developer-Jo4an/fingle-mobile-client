import { View, Text } from 'react-native'

import { ScreenHeaderStyles, ScreenHeaderTextStyles } from './ScreenHeaderStyles'

export default function ScreenHeader ({ children }) {
	return <View style={ ScreenHeaderStyles }><Text style={ ScreenHeaderTextStyles }>{ children }</Text></View>
}
