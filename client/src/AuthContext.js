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

    // const checkAdminStatus = () => {
    //     Axios.get('api/employees')
    //         .then(response => {
    //             // use code from response to check db for that employee's admin status
    //             console.log(response.data.code);
    //             const userCode = response.data.code;
    //         }).then(userCode => {

    //         })


    //     if (response.data.admin) {
    //         setIsAdmin(true)
    //     } else {
    //         setIsAdmin(false)
    //     }

    // }

    const checkAuth = () => {
        Axios.get('api/auth/user_data')
            .then(response => {
                console.log("response from checkAuth function: ", response);
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
                return <Redirect to='/' />
            })
            .catch(err => console.log(err));
    };

    return <AuthContext.Provider value={{ isAuth, setUser, setIsAuth, checkAuth, logout, user }}>{children}</AuthContext.Provider>;
};
