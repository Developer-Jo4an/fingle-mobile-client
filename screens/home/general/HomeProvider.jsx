import React, { useContext, useState, useReducer } from 'react'

const HomeContext = React.createContext()
export const useHomeContext = () => useContext(HomeContext)

export const accountDispatch = (state, action) => {
	switch (action.type) {
		case 'set-name': return { ...state, accountName: action.accountName }
		case 'set-count': return { ...state, count: action.count }
		case 'set-type': return { ...state, accountType: action.accountType }
		case 'set-account': return action.account
		case 'reload-account': return { accountName: '', count: 0, accountType: 'cash' }
		default: return state
	}
}

const HomeProvider = ({ children }) => {

    return (
        <HomeContext.Provider value={{
            addAccountMW: useState(false),
	        newAccount: useReducer(accountDispatch, { accountName: '', count: 0, accountType: 'cash' })
        }}>{ children }</HomeContext.Provider>
    )
}

export default HomeProvider