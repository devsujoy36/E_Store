import React from 'react'

const Hero = () => {
  return (
    <div className='portfolio-bg-hero '>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2 container mx-auto md:min-h-[85vh] overflow-hidden'>

        <div className=' z-10 flex justify-center items-center flex-col'>
          <h1 className="text-4xl">Hello! I am <br />
            <span className="font-semibold text-7xl text-blue-700"> Sujoy Das.</span></h1>
        </div>


        <div className='relative  flex items-end'>
          <img src="https://pxdraft.com/react/kanye/img/user-image.png" alt="" className='relative z-10' />
          <div className='md:block hidden bg-white h-[80vh] w-[80vh] rounded-full shadow-2xl absolute top-20 -left-26'></div>
        </div>

        <div className=' z-10 flex justify-center items-center flex-col'>
          <h1 className="text-3xl  font-semibold">Welcome to <span className="   text-4xl "> eStore_Hub</span></h1>
        </div>

      </div>
    </div>
  )
}

export default Hero