import React from 'react'
import {useContext, createContext, useEffect, useState} from 'react'
import {GoogleAuthProvider, signOut, onAuthStateChanged, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
import { auth,db } from '../Api/Firebase.Config'
import {setDoc,doc} from 'firebase/firestore'


const AuthContext = createContext()



export const AuthContextProvider = ({children}) =>{
        const [user, setUser] = useState({});
        
        function googleSignIn(){
            const provider = new GoogleAuthProvider();
            console.log(provider)
            signInWithPopup(auth, provider)
            setDoc(doc(db, 'users', email),{
                savedMovies:[]
            })
            
        }

        function signIn(email, password){
            return signInWithEmailAndPassword(auth, email, password);
        }

            function manualSignUp (email,password){
            createUserWithEmailAndPassword(auth,email,password);

            setDoc(doc(db, 'users', email),{
                savedMovies:[]
            })
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
            <AuthContext.Provider value={{googleSignIn, signOutSession, manualSignUp, signIn, user}}>

                {children}

            </AuthContext.Provider>
        )
    }

export const UserAuth = () =>{
    return useContext(AuthContext)
}