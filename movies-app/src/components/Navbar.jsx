import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import defaultUserPic from '../assets/defaultUser.png'


const Navbar = () => {
    const { user, signOutSession } = UserAuth();

    const navigate = useNavigate()


    const signOutUser = async () => {
        try {
            await signOutSession()

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (!user) {
            navigate("/signin")
        }
        



    }, [user])




    return (
        <div className='flex items-center justify-between p-4 z-[100] absolute w-full '>
                <Link to='/hero'>
                    <h1 className='text-red-600 text-4xl font-bold cursor-pointer ml-10'>PIPIFLIX</h1>
                </Link>



            {!user ?
                <div className='text-white items-center flex lg:flex-row'>



                    <Link className='pr-4' to='/signin'>
                        Sign In
                    </Link>
                    <Link to='/signup'>
                        <button className='bg-red-600 px-6 py-2 rounded cursor-pointer m-1'>Sign Up</button>
                    </Link>
                </div> :

                <Link to='/hero'>
                    
                </Link>
            }

            {
                user ?
                    <div className='text-white flex items-center flex-col lg:flex-row '>
                        <Link to='/account'>
                            <h1 title='account' className='text-white md:text-xl mr-2  '>{!user.displayName ? <p>{user.email}</p> : user.displayName}</h1>
                        </Link>

                        <img className='rounded-full w-8 h-8 md:w-12 md:h-12' src={!user.photoURL ? defaultUserPic : user.photoURL} alt="" />
                        <button onClick={signOutUser} className='bg-red-600 px-6 py-1 h-8 w-auto md:h-10 rounded cursor-pointer m-1 md:text-lg '>Sign Out</button>
                    </div> : true




            }


        </div>
    )
}

export default Navbar