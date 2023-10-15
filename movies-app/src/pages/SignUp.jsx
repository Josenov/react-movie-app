import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'


const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { user, manualSignUp } = UserAuth()
  const navigate = useNavigate()


  const handleSubmit = async (e) => {

    e.preventDefault()
    try {
      await manualSignUp(email, password)

    } catch (error) {
      console.log(error)
    }

  }

  useEffect(()=>{
    if (user!=null){
      navigate("/")
    }

    

  },[user])
  return (
    <>
        <div className='w-full h-screen '>
          <img className='hidden sm:block absolute w-full h-full object-cover' src="https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg" alt="" />
          <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
          <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white text-center'>
              <div className='max-w-[320px] mx-auto py-16 '>
                <h1 className='text-3xl font-bold'>Sign Up</h1>
                <form onSubmit={handleSubmit} className='flex flex-col'>
                  <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="email" placeholder='Email' autoComplete='email' />
                  <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='Password' autoComplete='current-password' />
                  <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
                  <div className='flex justify-between items-center text-sm font-bold text-gray-600'>
                    <p><input className='mr-2' type="checkbox" />Remember Me</p>
                    <p>Need Help?</p>
                  </div>
                  <p className='py-8'><span className='text-gray-400 mr-2'>Already subscribed to Popflix?</span><Link to='/signin'>Sign In</Link> </p>
                </form>
              </div>
            </div>
          </div>
        </div> 

    


    </>

  )
}

export default SignUp