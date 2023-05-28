import React from 'react'
import { useNavigate } from 'react-router-dom'
const NoMatch = () => {
    const navigate = useNavigate();
  return (
    <>
      <h1 className='ml-32 mt-11'>Page not found !</h1>
      <button className='ml-32 mt-11 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={()=>navigate('/')}>Go to Home</button>
    </>
  )
}

export default NoMatch
