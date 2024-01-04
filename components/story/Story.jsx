import { View, Image } from 'react-native'

import { styles } from './story-style'

const Story = ({ img }) => {

	return (
		<View style={ styles.story }>
			<Image
				source={ img }
				style={ styles.storyImg }
			/>
		</View>
	)
}

export default Story