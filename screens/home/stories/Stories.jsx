import { View, Text } from 'react-native'
import Tile from '../../../components/tile/Tile'
import TileHeader from '../../../components/tile-header/TileHeader'
import HorizontalSlider from '../../../components/sliders/horizontal-slider/HorizontalSlider'
import Story from '../../../components/story/Story'

import { keyGen } from '../../../functions/functions'

import { styles } from './stories-styles'

const Stories = () => {

	const stories = [
		{ key: 1, title: 'Иван Золо сдал егэ на 100 баллов по 3-ем предметам'},
		{ key: 2, title: 'Иван Золо сдал егэ на 100 баллов по 3-ем предметам'},
		{ key: 3, title: 'Иван Золо сдал егэ на 100 баллов по 3-ем предметам'},
		{ key: 4, title: 'Иван Золо сдал егэ на 100 баллов по 3-ем предметам'},
		{ key: 5, title: 'Иван Золо сдал егэ на 100 баллов по 3-ем предметам'},
		{ key: 6, title: 'Иван Золо сдал егэ на 100 баллов по 3-ем предметам'},
		{ key: 7, title: 'Иван Золо сдал егэ на 100 баллов по 3-ем предметам'}
	]

	return (
		<Tile moreTileContentStyles={ styles.tileStyles.content }>
			<View style={ styles.headerStyles }><TileHeader headerText={'Actual'}/></View>
			<HorizontalSlider
				data={stories}
				listStyles={{}}
				contentStyles={ styles.storiesContent }
				renderItemFunc={story => <Story key={ keyGen(story.key) }>{ story.title }</Story>}
			/>
		</Tile>
	)
}

export default Stories