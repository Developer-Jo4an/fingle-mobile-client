import { FlatList } from 'react-native'

const VerticalSlider = ({ data, renderItemFunc, listStyles, contentStyles }) => {
    return (
       <FlatList
           data={ data }
           renderItem={({ item }) => renderItemFunc(item)}
           keyExtractor={ _ => Math.random().toString() + Math.random().toString() + '260627062003200315265252' }
           showsVerticalScrollIndicator={false}
           style={listStyles}
           contentContainerStyle={contentStyles}
       />
    )
}

export default VerticalSlider