import React from 'react'
import SavedMovies from '../components/SavedMovies'

const Account = () => {
  return (
    <>
    
    <div className='text-white w-full'>
      <img className='w-full h-[400px] object-cover' src="https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg" alt="" />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'>
        <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>My Movies</h1>
        </div>
        
      </div>
    </div>
    <SavedMovies/>
    </>
  )
}

export default Account