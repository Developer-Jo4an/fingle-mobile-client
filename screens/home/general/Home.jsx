import { View, Text, ScrollView } from 'react-native'

import { HomeContainerStyles } from './HomeStyles'
import { containerStyles } from '../../../styles/global'
import Header from '../header/Header';

export default function Home () {
	return (
		<ScrollView style={ containerStyles }>
			<Header/>
		</ScrollView>
	)
}
