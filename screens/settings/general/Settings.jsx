import { ScrollView } from 'react-native'
import ScreenHeader from '../../../UI/screen-header/ScreenHeader'

import { containerStyles } from '../../../styles/global'

const Settings = () => {
    return (
        <ScrollView style={{ ...containerStyles, backgroundColor: '#fff'} }>
            <ScreenHeader>Settings</ScreenHeader>
        </ScrollView>
    )
}

export default Settings