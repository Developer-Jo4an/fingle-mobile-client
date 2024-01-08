import React, { useContext, useState, useReducer } from 'react'

import { mainGreenColor } from '../../../styles/global'

const HomeContext = React.createContext()
export const useHomeContext = () => useContext(HomeContext)

const defaultAccount = {
	accountName: '',
	count: 0,
	accountType: 'cash'
}

const defaultBudget = {
	budgetName: '',
	count: 0,
	budgetInterval: [new Date(), new Date()],
	budgetSelectedCategories: [],
	budgetSign: {
		budgetSignColor: mainGreenColor,
		budgetSignIcon: 'fa-solid fa-money-bill'
	}
}

const accountLogicFunc = (state, action) => {
	switch (action.type) {
		case 'set-name': return { ...state, accountName: action.accountName }
		case 'set-count': return { ...state, count: action.count }
		case 'set-type': return { ...state, accountType: action.accountType }
		case 'set-account': return action.account
		case 'reload-account': return defaultAccount
		case 'reload-modified-account': return { _id: 'none', ...defaultAccount }
		default: return state
	}
}

const budgetLogicFunc = (state, action) => {
	switch (action.type) {
		case 'set-name': return { ...state, budgetName: action.budgetName }
		case 'set-count': return { ...state, count: action.count }
		case 'set-interval-start': return { ...state, budgetInterval: [action.intervalStart, state.budgetInterval[1]] }
		case 'set-interval-end': return { ...state, budgetInterval: [state.budgetInterval[0], action.intervalEnd] }
		case 'set-category' : {
			const { budgetSelectedCategories } = state
			const isExist = budgetSelectedCategories.find(category => category._id === action.category._id)

			if (isExist) return { ...state, budgetSelectedCategories: budgetSelectedCategories.filter(category => category._id !== action.category._id) }
			return { ...state, budgetSelectedCategories: [action.category, ...budgetSelectedCategories] }
		}
		case 'set-sign-color': return { ...state, budgetSign: { ...state.budgetSign, budgetSignColor: action.color } }
		case 'set-sign': return { ...state, budgetSign: { ...state.budgetSign, budgetSign: action.sign } }
		case 'reload-budget': return defaultBudget
		case 'reload-modified-budget': return { _id: 'none', ...defaultBudget }
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
	        newAccount: useReducer(newAccountDispatch, defaultAccount),
			modifiedAccountMW: useState(false),
			modifiedAccount: useReducer(modifiedAccountDispatch, { _id: 'none', ...defaultAccount }),
			modifiedAccountCopy: useState({ _id: 'none', ...defaultAccount }),

	        addBudgetMW: useState(false),
	        newBudget: useReducer(newBudgetDispatch, defaultBudget),
	        modifiedBudgetMW: useState(false),
	        modifiedBudget: useReducer(modifiedBudgetDispatch, { _id: 'none', ...defaultBudget }),
	        modifiedBudgetCopy: useState({ _id: 'none', ...defaultBudget }),
        }}>{ children }</HomeContext.Provider>
    )
}

export default HomeProvider