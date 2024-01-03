import Home from '../screens/home/general/Home'
import Settings from '../screens/settings/general/Settings'
import Notifications from '../screens/notifications/general/Notifications'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export default function Navigation () {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen options={{ headerShown: false }} name={'Home'} component={ Home }/>
				<Stack.Screen options={{ headerShown: false }} name={'Settings'} component={ Settings }/>
				<Stack.Screen options={{ headerShown: false }} name={'Notifications'} component={ Notifications }/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

