import { View, Text } from 'react-native'
import Tile from '../../../components/tile/Tile'
import TileHeader from '../../../components/tile-header/TileHeader'
import HorizontalSlider from '../../../components/sliders/horizontal-slider/HorizontalSlider'
import Story from '../../../components/story/Story'

import { keyGen } from '../../../functions/functions'

import { styles } from './stories-styles'

import Johan from './story-images/Johan.jpg'
import Ichimaru from './story-images/Ichimaru.jpg'
import Griffit from './story-images/Griffit.jpg'
import Aizen from './story-images/Aizen.jpg'
import Sasuke from './story-images/Sasuke.jpg'
import Di from './story-images/Di.jpg'
import Kuroro from './story-images/Kuroro.jpg'

const Stories = () => {

	const stories = [
		{ key: 1, img: Johan },
		{ key: 2, img: Ichimaru },
		{ key: 3, img: Griffit },
		{ key: 4, img: Aizen },
		{ key: 5, img: Sasuke },
		{ key: 6, img: Di },
		{ key: 7, img: Kuroro }
	]

	return (
		<Tile moreTileContentStyles={ styles.tileStyles.content }>
			<View style={ styles.headerStyles }><TileHeader headerText={'Actual'}/></View>
			<HorizontalSlider
				data={stories}
				listStyles={{}}
				contentStyles={ styles.storiesContent }
				renderItemFunc={story => <Story key={ keyGen(story.key) } img={ story.img }/>}
			/>
		</Tile>
	)
}

export default Stories