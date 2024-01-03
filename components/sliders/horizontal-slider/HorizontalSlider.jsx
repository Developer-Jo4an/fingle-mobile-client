import { ScrollView } from 'react-native'

const HorizontalSlider = ({ data, renderItemFunc, listStyles, contentStyles }) => {
	return (
		<ScrollView
			style={ listStyles }
			contentContainerStyle={ contentStyles }
			showsVerticalScrollIndicator={ false }
			nestedScrollEnabled={ true }
			horizontal={ true }
		>{ data.map(renderItemFunc) }
		</ScrollView>
	)
}

export default HorizontalSlider