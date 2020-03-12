import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import { Redirect } from 'react-router-dom'

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false)
    const [user, setUser] = useState();

    useEffect(() => {
        checkAuth()
    }, [])

    const checkAuth = async () => {
        Axios.get('api/auth/user_data')
            .then(response => {
                console.log(response.data);
                if (response.data.code) {
                    setIsAuth(true)
                    // Set user so we can access later for profile page
                    setUser(response)
                    // console.log("checkAuth user: ", response.data)
                } else {
                    setIsAuth(false)
                }
            })
    }

    const logout = async () => {
        Axios.get("/api/auth/logout")
            .then(() => {
                setIsAuth(false);
                // Set user to null?
                return <Redirect to='/' />
            })
            .catch(err => console.log(err));
    };

    return <AuthContext.Provider value={{ isAuth, setIsAuth, checkAuth, logout, user }}>{children}</AuthContext.Provider>;
};
