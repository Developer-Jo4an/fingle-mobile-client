import { View, Animated, Pressable } from 'react-native'
import { useEffect, useRef } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { createSVGName } from '../../functions/functions'
import { useHomeContext } from '../../screens/home/general/HomeProvider'

import { styles } from './category-styles'

const Category = ({ category, clickFunction }) => {
	const { _id, name, sign, color } = category

	const { newBudget } = useHomeContext()
	const [newBudgetState, _] = newBudget

	const categoryClickAnimation = useRef(new Animated.Value(0)).current

	useEffect(() => {
		const { budgetSelectedCategories } = newBudgetState
		const isActive = budgetSelectedCategories.reduce((acc, category) => {
			if (category._id === _id) return 1
			else return acc
		}, 0)
		Animated.timing(categoryClickAnimation, {
			toValue: isActive,
			duration: 200,
			useNativeDriver: false
		}).start()
	}, [newBudgetState.budgetSelectedCategories])

	return (
		<View>
			<Pressable onPress={ () => clickFunction(category) }>
				<Animated.View style={ styles.category(categoryClickAnimation, color) }>
					<Animated.View style={ styles.categorySignWrapper(categoryClickAnimation, color) }>
						<Animated.View style={ styles.animationIcon(categoryClickAnimation) }><FontAwesomeIcon icon={ createSVGName(sign) } color={ color }/></Animated.View>
						<FontAwesomeIcon icon={ createSVGName(sign) } color={ '#fff' } />
					</Animated.View>
					<Animated.Text style={ styles.categoryName(categoryClickAnimation) }>{ name }</Animated.Text>
				</Animated.View>
			</Pressable>
		</View>
	)
}
export default Category