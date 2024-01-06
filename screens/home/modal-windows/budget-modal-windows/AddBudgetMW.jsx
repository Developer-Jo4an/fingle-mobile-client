import { View, Animated, TextInput, TouchableNativeFeedback, Text, Alert } from 'react-native'
import {useEffect, useRef} from 'react'
import Account from '../../../../components/account/Account'
import ModalWindowCenterHeader from '../../../../components/modal-windows/modal-window-center/modal-window-center-header/ModalWindowCenterHeader'
import VerticalSlider from '../../../../components/sliders/vertical-slider/VerticalSlider'
import Category from '../../../../components/category/Category'
import HorizontalSlider from '../../../../components/sliders/horizontal-slider/HorizontalSlider'

import { useAppContext } from '../../../../AppProvider'
import { useHomeContext } from '../../general/HomeProvider'
import { hideModalWindow, typeToggleBtn } from '../account-logic/account-logic'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {createSVGName, keyGen} from '../../../../functions/functions'

import { clickGrayBackground } from '../../../../styles/global'
import { styles } from '../budget-logic/budget-logic'

const AddBudgetMW = () => {

	const { user } = useAppContext()
	const [userState, userDispatch] = user
	const { transactionCategories } = userState

	const { addBudgetMW, newBudget } = useHomeContext()
	const [newBudgetState, newBudgetDispatch] = newBudget
	const { budgetName, count, budgetInterval, budgetSelectedCategories, budgetSign } = newBudgetState

	const newBudgetNameRef = useRef()
	const newBudgetCountRef = useRef()

	const setCategoryFunc = category => newBudgetDispatch({ type: 'set-category', category })

	const closeModalWindow = () => {
		newBudgetDispatch({ type: 'reload-budget' })
		addBudgetMW[1](false)
	}

	return (
		<View style={ styles.budgetMWContent }>
			<Animated.View style={ styles.budgetMWContentWrapper}>
				<View style={ styles.budgetHeaderWrapper }><ModalWindowCenterHeader header={'Add budget'} clickFunc={ closeModalWindow }/></View>
				<View style={ styles.budgetForm }>
					<View style={ styles.budgetSignNameWrapper }>
						<View style={ styles.budgetSign(budgetSign.budgetSignColor) }>
							<FontAwesomeIcon icon={ createSVGName(budgetSign.budgetSign) } color={ '#fff' } size={ 26 } />
						</View>
						<TextInput
							maxLength={ 30 }
							ref={ newBudgetNameRef }
							style={ styles.budgetInput }
							placeholder={'Name'}
							onChangeText={ text => newBudgetDispatch({ type: 'set-name', budgetName: text }) }
						/>
					</View>
					<View style={ styles.budgetCountWrapper }>
						<TextInput
							maxLength={ 13 }
							ref={ newBudgetCountRef }
							style={ styles.budgetInput }
							placeholder={'Count'}
							keyboardType={'numeric'}
							onChangeText={ text => newBudgetDispatch({ type: 'set-count', count: +text }) }
						/>
					</View>
					<HorizontalSlider
						data={ [...Object.values(transactionCategories.expense)] }
						renderItemFunc={ category => <Category key={ keyGen(category._id) } category={ category } clickFunction={ setCategoryFunc }/> }
						contentStyles={ styles.budgetSelectedCategoriesContent }
					/>
				</View>
			</Animated.View>
		</View>
	)
}

export default AddBudgetMW