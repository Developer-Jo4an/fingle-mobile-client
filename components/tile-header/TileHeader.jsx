import { Text, View } from 'react-native'

import { styles } from './tyle-header-styles'

const TileHeader = ({ headerText, headerLogic, additionalStyles }) => {
    return (
        <View style={{ ...styles.totalHeader, ...additionalStyles }}>
            <Text style={ styles.totalHeaderText }>{ headerText }</Text>
            <View style={ styles.totalHeaderInfoWrapper }>{ headerLogic }</View>
        </View>
    )
}

export default TileHeader