import Navigation from './navigation/Navigation'
import OpaqueLoader from './components/loaders/opaque-loader/OpaqueLoader'

import { StatusBar, View, Alert } from 'react-native'
import { useAppContext } from './AppProvider'
import { useEffect } from 'react'
import axios from 'axios'
import { getCommonPath, userId } from './functions/functions'

import { applicationStyles } from './application-styles'

const Application = () => {
	const { user } = useAppContext()
	const [userState, userDispatch] = user

	useEffect(() => {
		const getUserData = async () => {
			try {
				const userInfo = await axios.get(`${getCommonPath}/get-user-info/${userId}`)
				const { data } = userInfo

				if (data.status) userDispatch({ type: 'set', user: data.userInfo })
				else throw new Error('Server Error: Invalid data received')

			} catch (e) {
				Alert.alert(
					'Error',
					`${e.message}\nWe will reboot your application`,
					[{ text: 'ok', onPress: getUserData }] // Пока что буду перезапускать функцию, но это надо подправить!
				)
			}
		}
		getUserData()
	}, [])

	if (!userState._id) return <OpaqueLoader />

	return (
		<View style={ applicationStyles }>
			<Navigation />
			<StatusBar backgroundColor='white' barStyle='dark-content'/>
		</View>
	)
}

export default Application