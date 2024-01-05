import {Alert, ScrollView, Text} from 'react-native'
import Tile from '../../../components/tile/Tile'
import TileHeader from '../../../components/tile-header/TileHeader'
import AddBtn from '../../../UI/add-btns/add-btn/AddBtn'
import HorizontalSlider from '../../../components/sliders/horizontal-slider/HorizontalSlider'

import { useAppContext } from '../../../AppProvider'

import { styles } from './budgets-styles'

const Budgets = () => {

	const { user } = useAppContext()
	const [userState, _] = user
	const { budgets } = userState

	const amountBudgets = budgets.length

	const getBudgetData = () => {
		if (amountBudgets) return budgets
		else return [] [{
			budgetName: 'My future budget',
			count: 10000,
			interval: [],

		}]
	}

	return (
		<Tile>
			<TileHeader headerText={'Budgets'} headerLogic={amountBudgets ?  <AddBtn clickFunction={() => {}}/> : null}/>
			{/*<HorizontalSlider data={getBudgetData()}/>*/}
		</Tile>
	)
}

export default Budgets