import { ScrollView } from 'react-native'

const VerticalSlider = ({ data, renderItemFunc, listStyles, contentStyles }) => {
    return (
       <ScrollView
	       style={ listStyles }
	       contentContainerStyle={ contentStyles }
	       showsVerticalScrollIndicator={false}
	       nestedScrollEnabled={true}
       >{ data.map(renderItemFunc) }
       </ScrollView>
    )
}

export default VerticalSlider