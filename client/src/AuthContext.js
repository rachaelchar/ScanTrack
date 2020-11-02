import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import { Redirect } from 'react-router-dom'

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [user, setUser] = useState();

    useEffect(() => {
        checkAuth()
    }, [])

    const checkAdminStatus = () => {
        if (user !== undefined && user !== "" && user !== null) {
            console.log("***************************** \n user code from check admin ", user);
            // Axios.get(`api/employees/${user.data.code}`)
            Axios.get(`api/employees/?code=${user.data.code}`)
                .then(response => {
                    if (response.data !== undefined && response.data !== "" && response.data !== null) {
                        console.log("=======================");
                        console.log(response);
                        if (response.data.admin === 1) {
                            setIsAdmin(true)
                        } else {
                            setIsAdmin(false)
                        }
                    }
                })

        }
    }

    const checkAuth = () => {
        Axios.get('api/auth/user_data')
            .then(response => {
                if (response.data.code) {
                    setUser(response)
                    setIsAuth(true)
                } else {
                    setIsAuth(false)
                }
            })
    }

    const logout = async () => {
        Axios.get("/api/auth/logout")
            .then(() => {
                setIsAuth(false);
                setUser();
                setIsAdmin(false);
                return <Redirect to='/login' />
            })
            .catch(err => console.log(err));
    };

    return <AuthContext.Provider value={{ isAuth, setUser, setIsAuth, checkAuth, logout, user, checkAdminStatus }}>{children}</AuthContext.Provider>;
};
