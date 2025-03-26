import moment from 'moment';
const Hero = () => {
  return (
    <div>
      <div className="w-full hero-bg bg-center bg-cover h-[48rem]" >
        <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
          <div className="text-center">
            <h1 className='text-white text-2xl font-semibold font-poppine'>{moment().format('MMMM Do YYYY, h:mm:ss a')}</h1>
            <h1 className="text-3xl flex justify-center items-center gap-2 font-semibold text-white lg:text-4xl">Welcome To Our <a href='/'>
              <h1 className=' text-3xl text-blue-200 italic font-bold font-carter-one'>ESTORE_HUB</h1></a></h1>
            {/* <button className="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Start project</button> */}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero