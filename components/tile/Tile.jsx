import { View } from 'react-native'

import { styles } from './tyle-styles'

const Tile = ({ children }) => {
    return (
        <View style={ styles.tileStyles }>
            <View style={ styles.tileContent }>{ children }</View>
        </View>
    )
}

export default Tile