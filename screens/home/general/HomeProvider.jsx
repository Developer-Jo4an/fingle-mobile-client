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
		case 'reload-modified-account': return { _id: 'none', accountName: '', count: 0, accountType: 'cash' }
		default: return state
	}
}

const budgetLogicFunc = (state, action) => {
	switch (action.type) {

		default: return state
	}
}

const newAccountDispatch = (state, action) => accountLogicFunc(state, action)
const modifiedAccountDispatch = (state, action) => accountLogicFunc(state, action)

const newBudgetDispatch = (state, action) => budgetLogicFunc(state, action)
const modifiedBudgetDispatch = (state, action) => budgetLogicFunc(state, action)

const HomeProvider = ({ children }) => {

    return (
        <HomeContext.Provider value={{
            addAccountMW: useState(false),
	        newAccount: useReducer(newAccountDispatch, { accountName: '', count: 0, accountType: 'cash' }),
			modifiedAccountMW: useState(false),
			modifiedAccount: useReducer(modifiedAccountDispatch, { _id: 'none', accountName: '', count: 0, accountType: 'cash' }),
			modifiedAccountCopy: useState({ _id: 'none', accountName: '', count: 0, accountType: 'cash' }),

	        addBudgetMW: useState(false),
	        newBudget: useReducer(newBudgetDispatch, { budgetName: '', count: 0, interval: [new Date(), new Date()], selectedCategories: [] }),
	        modifiedBudgetMW: useState(false),
	        modifiedBudget: useReducer(modifiedBudgetDispatch, { _id: 'none', budgetName: '', count: 0, interval: [new Date(), new Date()], selectedCategories: [] }),
	        modifiedBudgetCopy: useState({ _id: 'none', budgetName: '', count: 0, interval: [new Date(), new Date()], selectedCategories: [] }),
        }}>{ children }</HomeContext.Provider>
    )
}

export default HomeProvider