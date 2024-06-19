import React from 'react'
import spinner from './assets/HDoX-ezgif.com-gif-maker.gif'

function Spinner() {
  return (
    <div className='w-100 mt-20'>
        <img width={180} className='text-center mx-auto' src={spinner} alt='Loading...' />
        <p className='text-center mx-auto'>Loading...</p>
    </div>
  )
}

export default Spinner