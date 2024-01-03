import { ScrollView } from 'react-native'
import ScreenHeader from '../../../UI/screen-header/ScreenHeader'

import { containerStyles } from '../../../styles/global'

const Notifications = () => {
    return (
        <ScrollView style={{ ...containerStyles, backgroundColor: '#fff'} }>
            <ScreenHeader>Notifications</ScreenHeader>
        </ScrollView>
    )
}

export default Notifications