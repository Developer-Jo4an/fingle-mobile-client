import Tile from '../../../components/tile/Tile'
import TileHeader from '../../../components/tile-header/TileHeader'
import AddBtn from '../../../UI/add-btns/add-btn/AddBtn'
import BetweenDistance from '../../../UI/beetween-distance/BetweenDistance'
import VerticalSlider from '../../../components/sliders/vertical-slider/VerticalSlider'
import Account from '../../../components/account/Account'
import ModalWindowCenter from '../../../components/modal-windows/modal-window-center/ModalWindowCenter'
import AddAccountMW from '../modal-windows/add-account-mw/AddAccountMW'

import { useAppContext } from '../../../AppProvider'
import { useHomeContext } from '../general/HomeProvider'
import { keyGen } from '../../../functions/functions'

import { styles } from './accounts-styles'

const Accounts = () => {

    const { user } = useAppContext()
    const [userState, _] = user

    const { addAccountMW } = useHomeContext()

    return (
        <Tile>
            <TileHeader headerText={'Accounts'} headerLogic={ <AddBtn clickFunction={() => addAccountMW[1](true)} />} additionalStyles={{ alignItems: 'center' } }/>
            <BetweenDistance styles={{ height: 10 }}/>
            <VerticalSlider
                data={ Object.values(userState.accounts) }
                renderItemFunc={ account => <Account key={ keyGen(account._id) } account={ account }/> }
                listStyles={ styles.accountsSliderStyles }
                contentStyles={ styles.accountSliderContentStyles }
            />
            <ModalWindowCenter visible={ addAccountMW }><AddAccountMW/></ModalWindowCenter>
        </Tile>
    )
}

export default Accounts