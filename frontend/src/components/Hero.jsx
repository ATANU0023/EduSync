import React from 'react'

function Hero() {
  return (
    <div>
      <div className=' h-screen grid place-items-center bg-gradient-to-r from-purple-500 to bg-pink-500 '>
        <div>
          <div className='grid  place-items-center mb-14'>
            <h1 className='font-semibold text-4xl md:text-6xl text-white'>Are You a Teacher or Student.</h1>
          </div>
          <div className=' justify-center items-center flex gap-9'>
            <div className='h-[68px] w-[98px] bg-white font-bold rounded-md  shadow-xl grid place-items-center cursor-pointer'>Teacher</div>
            <div className='h-[68px] w-[98px] bg-white font-bold backdrop-filter rounded-md grid shadow-xl place-items-center cursor-pointer'>Student</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero
