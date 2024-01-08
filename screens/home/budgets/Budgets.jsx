import { Alert, ScrollView, Text, TouchableNativeFeedback, View } from 'react-native'
import Tile from '../../../components/tile/Tile'
import TileHeader from '../../../components/tile-header/TileHeader'
import AddBtn from '../../../UI/add-btns/add-btn/AddBtn'
import HorizontalSlider from '../../../components/sliders/horizontal-slider/HorizontalSlider'
import ModalWindowCenter from '../../../components/modal-windows/modal-window-center/ModalWindowCenter'
import ModalWindowBottom from '../../../components/modal-windows/modal-window-bottom/ModalWindowBottom'
import AddBudgetMW from '../modal-windows/budget-modal-windows/AddBudgetMW'

import { useAppContext } from '../../../AppProvider'
import { clickGrayBackground, mainGreenColor } from '../../../styles/global'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useHomeContext } from '../general/HomeProvider'

import { styles } from './budgets-styles'


const Budgets = () => {

	const { user } = useAppContext()
	const [userState, _] = user
	const { budgets } = userState
	const amountBudgets = budgets.length

	const { addBudgetMW } = useHomeContext()

	return (
		<Tile>
			<TileHeader headerText={'Budgets'} headerLogic={ amountBudgets ? <AddBtn clickFunction={() => addBudgetMW[1](true)}/> : null } additionalStyles={{ paddingBottom: 10 }}/>
			{
				!amountBudgets ?
				<View style={ styles.noBudgetArea }>
					<View style={ styles.noBudgetAddBtn }>
						<TouchableNativeFeedback background={ TouchableNativeFeedback.Ripple(clickGrayBackground) } onPress={() => addBudgetMW[1](true)}>
							<View style={ styles.noBudgetAddWrapper }>
								<View style={ styles.noBudgetPlusSignWrapper }><FontAwesomeIcon icon={ faPlus } color={ mainGreenColor }/></View>
								<Text style={ styles.noBudgetAddText }>Add your first budget</Text>
							</View>
						</TouchableNativeFeedback>
					</View>
				</View>
				:
				<View></View>
			}
			<ModalWindowBottom visible={ addBudgetMW }><AddBudgetMW/></ModalWindowBottom>
		</Tile>
	)
}

export default Budgets