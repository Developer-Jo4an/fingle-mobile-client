import React, {useContext, useReducer} from 'react'

const AppContext = React.createContext()
export const useAppContext = () => useContext(AppContext)

const userReducer = (state, action) => {
	switch (action.type) {
		case 'set': return action.user
		default: return state
	}
}

export default function AppProvider ({ children }) {
	return (
		<AppContext.Provider value={{
			user: useReducer(userReducer, {_id: false})
		}}>{ children }</AppContext.Provider>
	)
}