import React, {useContext, useReducer, useState} from 'react'
import { Dimensions } from 'react-native'

const AppContext = React.createContext()
export const useAppContext = () => useContext(AppContext)

const userReducer = (state, action) => {
	switch (action.type) {
		case 'set-accounts': return { ...state, accounts: action.accounts }
		case 'set': return action.user
		default: return state
	}
}

export const windowHeight = Dimensions.get('screen').height
export const windowWidth = Dimensions.get('screen').width


export default function AppProvider ({ children }) {
	return (
		<AppContext.Provider value={{
			user: useReducer(userReducer, { _id: false }),
		}}>{ children }</AppContext.Provider>
	)
}