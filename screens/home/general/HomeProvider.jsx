import React, { useContext, useState } from 'react'

const HomeContext = React.createContext()
export const useHomeContext = () => useContext(HomeContext)

const HomeProvider = ({ children }) => {
    return (
        <HomeContext.Provider value={{
            addAccountMW: useState(false)
        }}>{ children }</HomeContext.Provider>
    )
}

export default HomeProvider