import { View, Text } from 'react-native'
import Tile from '../../../components/tile/Tile'
import TileHeader from '../../../components/tile-header/TileHeader'

import { useAppContext } from '../../../AppProvider'

import { styles } from './total-styles'

const Total = () => {

    const { user } = useAppContext()
    const [userState, _] = user
    const { accounts } = userState

    const getAccountsCount = () => Object.values(accounts).reduce((acc, { count }) => acc + count, 0)

    const headerLogic = (
        <>
            <Text style={ styles.totalHeaderValue(getAccountsCount()) }>{ getAccountsCount() } $</Text>
            <Text style={ styles.totalHeaderTextLabel }>Sum of all cards</Text>
        </>
    )

    return (
        <Tile>
            <TileHeader headerText={'Total'} headerLogic={headerLogic} />
        </Tile>
    )
}

export default Total