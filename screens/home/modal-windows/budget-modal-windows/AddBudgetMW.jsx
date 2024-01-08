import {Alert, Text, TextInput, View} from 'react-native'
import { styles } from '../budget-logic/budget-logic'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useAppContext } from '../../../../AppProvider'
import { useHomeContext } from '../../general/HomeProvider'
import { createSVGName } from '../../../../functions/functions'
import { useRef } from 'react'

const AddBudgetMW = () => {

	const { user } = useAppContext()
	const [userState, userDispatch] = user
	const { newBudget, addBudgetMW } = useHomeContext()
	const [newBudgetState, newBudgetDispatch] = newBudget
	const { budgetSign } = newBudgetState

	const budgetNameInputRef = useRef()

	return (
		<View style={ styles.budgetMW }>
			<View style={ styles.budgetForm }>
				<View style={ styles.budgetFormPart }>
					<View style={ styles.budgetSignWrapper() }>
						<FontAwesomeIcon icon={ createSVGName(budgetSign.budgetSignIcon) } color={ '#fff' } size={ 26 } />
					</View>
					<View>
						<TextInput
							style={ styles.budgetNameInput }
							ref={ budgetNameInputRef }
							maxLength={ 30 }
							placeholder={'Name'}
							onChangeText={() => {}}
						/>
					</View>
				</View>
			</View>
		</View>
	)
}

export default AddBudgetMW