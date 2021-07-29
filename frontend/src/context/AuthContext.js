import React, { useState, useEffect, createContext } from 'react'
import { AxiosInstance } from '../utils/Helpers'

const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
    const [loggedIn, setLoggedIn] = useState(undefined);

    const getLoggedIn = async() => {
        const { data } = await AxiosInstance( 'users/login')
        if(data._id) {
            setLoggedIn(true)
        } else {
            setLoggedIn(false)
        }
        console.log('what is is loggedIn?', data._id);
    }

    useEffect(() => {
        getLoggedIn()
        console.log(loggedIn);
    }, [setLoggedIn, loggedIn])

    return (
        <AuthContext.Provider value={ { loggedIn, getLoggedIn, setLoggedIn } }>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
export {AuthContextProvider};