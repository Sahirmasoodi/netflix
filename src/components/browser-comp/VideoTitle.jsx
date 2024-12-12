import React from 'react'

const VideoTitle = ({movieTitle,overview}) => {
  return (
    <div className='flex flex-col justify-end md:justify-center aspect-video w-screen p-5 md:px-10 absolute bg-gradient-to-r from-black '>
    <div className='text-white w-1/3 min-w-52 mt-5 ' >
      <h1 className='font-bold font-serif text-md md:text-2xl md:mb-2'>{movieTitle}</h1>
      <p className='text-sm hidden md:inline-block opacity-60 text-justify'>{overview}</p>
    </div>

      <div className='mt-1 md:mt-5'>
        <button className='bg-white bg-opacity-75 px-2 py-1  md:px-4 md:py-2 rounded-md hover:bg-white hover:bg-opacity-100'> ▶ Play</button>
        <button  className=" bg-gray-500 bg-opacity-50 text-white ms-2  px-2 py-1 md:px-4 md:py-2  rounded-md hover:bg-gray-500  transition-all"> ⓘ More info</button>
      </div>
    </div>
  ) 
}

export default VideoTitle
