import React, { useContext, useState, useReducer } from 'react'

const HomeContext = React.createContext()
export const useHomeContext = () => useContext(HomeContext)

const accountLogicFunc = (state, action) => {
	switch (action.type) {
		case 'set-name': return { ...state, accountName: action.accountName }
		case 'set-count': return { ...state, count: action.count }
		case 'set-type': return { ...state, accountType: action.accountType }
		case 'set-account': return action.account
		case 'reload-account': return { accountName: '', count: 0, accountType: 'cash' }
		default: return state
	}
}

export const newAccountDispatch = (state, action) => accountLogicFunc(state, action)
export const modifiedAccountDispatch = (state, action) => accountLogicFunc(state, action)

const HomeProvider = ({ children }) => {

    return (
        <HomeContext.Provider value={{
            addAccountMW: useState(false),
	        newAccount: useReducer(newAccountDispatch, { accountName: '', count: 0, accountType: 'cash' }),
			modifiedAccountMW: useState(false),
			modifiedAccount: useReducer(modifiedAccountDispatch, { _id: 'none', accountName: '', count: 0, accountType: 'cash' }),
			modifiedAccountCopy: useState({ _id: 'none', accountName: '', count: 0, accountType: 'cash' })
        }}>{ children }</HomeContext.Provider>
    )
}

export default HomeProvider