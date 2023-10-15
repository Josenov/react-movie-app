import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Account from '../pages/Account'
import { UserAuth } from '../context/AuthContext'


const MyRoutes = () => {

    const { user } = UserAuth();
    const RequireAuth = ({ children }) => {
        return user ? children : <Navigate to="/" />
    }
    return (



        <Routes>

            <Route path="/" element={
                <RequireAuth>
                    <Home />
                </RequireAuth>} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/account" element={<Account />} />

        </Routes>



    )
}

export default MyRoutes