import Tile from '../../../components/tile/Tile'
import TileHeader from '../../../components/tile-header/TileHeader'
import AddBtn from '../../../UI/add-btns/add-btn/AddBtn'

import { styles } from './budgets-styles'

const Budgets = () => {
	return (
		<Tile>
			<TileHeader headerText={'Budgets'} headerLogic={<AddBtn clickFunction={() => {}}/>}/>
		</Tile>
	)
}

export default Budgets