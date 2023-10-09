import React from 'react'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between p-4 z-[100] aboslute w-full'>
            <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>POPFLIX</h1>
            <div className='text-white '>
                <button className='pr-4'>Sign In</button>
                <button className='bg-red-600 px-6 py-2 rounded cursor-pointer'>Sign Up</button>
            </div>
        </div>
    )
}

export default Navbar