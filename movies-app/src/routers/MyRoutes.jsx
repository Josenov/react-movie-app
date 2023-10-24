import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Account from '../pages/Account'
import { UserAuth } from '../context/AuthContext'
import Hero from '../components/Hero'


const MyRoutes = () => {

    const { user } = UserAuth();
    const RequireAuth = ({ children }) => {
        return user ? children : <Navigate to="/hero" />
    }
    return (



        <Routes>

            <Route path="/" element={
                <RequireAuth>
                    <Home />
                </RequireAuth>} />
            <Route path="/hero" element={<Hero />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/account" element={
            <RequireAuth>
                <Account />
            </RequireAuth>} />

        </Routes>



    )
}

export default MyRoutes