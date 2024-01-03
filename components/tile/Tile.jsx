import { View } from 'react-native'

import { styles } from './tile-styles'

const Tile = ({ moreTileStyles, moreTileContentStyles,  ...props }) => {
    return (
        <View style={{ ...styles.tileStyles, ...moreTileStyles }}>
            <View style={{ ...styles.tileContent, ...moreTileContentStyles }}>{ props.children }</View>
        </View>
    )
}

export default Tile