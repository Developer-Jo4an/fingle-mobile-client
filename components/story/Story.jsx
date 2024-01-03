import { View, Text } from 'react-native'

import { styles } from './story-style'

const Story = ({ children }) => {
	return (
		<View style={ styles.story }>
			<View style={ styles.storyWrapper }><Text style={ styles.storyText }>{ children }</Text></View>
		</View>
	)
}

export default Story