import { SafeAreaView, StatusBar, View } from 'react-native'
import { useEffect } from 'react'

import Navigation from './navigation/Navigation'
import OpaqueLoader from './components/loaders/opaque-loader/OpaqueLoader'

import { useAppContext } from './AppProvider'
import { userRequestFunc } from './functions/functions'

import { applicationStyles } from './application-styles'

const Application = () => {
	const { user } = useAppContext()
	const [userState, userDispatch] = user

	useEffect(() => {
		userRequestFunc(userDispatch)
	}, [])

	if (!userState._id) return <OpaqueLoader />

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={ applicationStyles }>
				<Navigation />
				<StatusBar backgroundColor='white' barStyle='dark-content'/>
			</View>
		</SafeAreaView>

	)
}

export default Application