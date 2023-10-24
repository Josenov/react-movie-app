import React from 'react'

const Hero = () => {
  return (
    <> <div>
        <img className='hidden sm:block absolute w-full h-full object-cover' src="https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg" alt="" />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
        
          <div className='max-w-[850px] h-[300px] mx-auto bg-black/75 text-white text-center flex justify-center items-center'>
            <h1 className='text-white text-4xl font-semibold '>Please Sign In or Sign Up to enjoy PIPIFLIX</h1>
          </div>
        </div>
    </div>
    
    </>
  )
}

export default Hero