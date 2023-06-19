import React from 'react'
import { useNavigate } from 'react-router-dom'
import { TbError404 } from 'react-icons/tb'
const NoMatch = () => {
    const navigate = useNavigate();
  return (
    <>
      <div className="shadow-lg p-5 shadow-zinc-900 text-center absolute top-0 bottom-0 left-0 right-0 h-96 w-[50%] m-auto ">
        <div className='my-[10%]'>       
          <h1 className='text-9xl m-auto pl-[41%]'><TbError404 className='text-blue-950'/></h1>
          <p className='text-2xl mb-3'>Page Not Found!</p>
          <button className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => navigate('/')}>Go to Home</button>
        </div>
      </div>
    </>
  )
}

export default NoMatch
