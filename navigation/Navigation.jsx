import Home from '../screens/home/general/Home'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export default function Navigation () {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen options={{ headerShown: false }} name={'Home'} component={Home}/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

