import axios from 'axios'
import { Alert } from 'react-native'

export const getCommonPath = 'http://192.168.1.107:5000'
export const userId = '64df628be6b9b3d99d542be5'
export const keyGen = _id => Math.random().toString() + '260627062003200315265252' + _id ? _id : Math.random().toString()

export const userRequestFunc = async userDispatch => {
	try {
		const userInfo = await axios.get(`${getCommonPath}/get-user-info/${userId}`)
		const { data } = userInfo

		if (data.status) userDispatch({ type: 'set', user: data.userInfo })
		else throw new Error('Server Error: Invalid data received')

	} catch (e) {
		Alert.alert(
			'Error',
			`${e.message}\nWe will reboot your application`,
			[{ text: 'ok' }]
		)
	}
}

export const onRefresh = async (setState, userDispatch) => {
	setState(true)
	await userRequestFunc(userDispatch)
	setState(false)
}