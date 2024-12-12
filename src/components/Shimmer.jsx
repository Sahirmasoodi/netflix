import React from 'react'

const Shimmer = () => {
    let arr = [1,1,1,1,1,1,1,1]
  return (
    <div className='h-screen bg-gray-100 p-5'>
    <div className='h-1/2 w-screen bg-gray-300 shadow-gray-400 shadow-sm  '></div>
    <div className="flex flex-wrap justify-evenly bg-gray-100">
    {
      arr.map((dummy,index)=> <div key={index+123} className='min-w-52 w-64 h-60 m-5  bg-gray-300 rounded shadow-sm shadow-gray-400 hover:scale-95'></div>)
    }
     
    </div>
    </div>
  )
}

export default Shimmer
