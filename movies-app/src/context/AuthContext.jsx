import React from 'react'
import {useContext, createContext, useEffect, useState} from 'react'
import {GoogleAuthProvider, signOut, onAuthStateChanged, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../Api/Firebase.Config'
import {setDoc,doc} from 'firebase/firestore'


const AuthContext = createContext()



export const AuthContextProvider = ({children}) =>{
        const [user, setUser] = useState({});
        
        const googleSignIn=()=>{
            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider)
            
        }

        const manualSignUp=(email,password)=>{
            createUserWithEmailAndPassword(auth,email,password);
            /* setDoc(doc(db, 'users', user),{
                savedMovies:[]
            }) */
        }

        const signOutSession=()=>{
            signOut(auth)
        }

        useEffect(()=>{
            const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
                setUser(currentUser)
            })
            return ()=>{
                unsubscribe();
            }
        }, [])

        return (
            <AuthContext.Provider value={{googleSignIn, signOutSession, manualSignUp, user}}>

                {children}

            </AuthContext.Provider>
        )
    }

export const UserAuth = () =>{
    return useContext(AuthContext)
}