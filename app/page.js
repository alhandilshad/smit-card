"use client"
import React, { useState } from 'react'
import cardData from './cardData'

const page = () => {
  const [index, setindex] = useState(0);

  const handlePrev = () => {
    if (index > 0) {
      setindex(index - 1);
    }
  };
  const handleNext = () => {
    if (index < cardData.length - 1) {
      setindex(index + 1);
    }
  };
  return (
    <>
    <div className='flex flex-col justify-center items-center gap-5 bg-gray-200 h-[100vh]'>
      <div className='bg-white w-[20%] h-[55vh] shadow-lg shadow-gray-500 border border-gray-300 flex flex-col justify-between items-center'>
        <div className='bg-blue-400 h-[3vh] w-full'></div>
        <div className='flex flex-col items-center justify-center gap-2'>
          <img src='https://student.saylaniwelfare.com/assets/logo-OpazD70S.png' className='w-24' />
          <img src={cardData[index].imageURL} className='w-28 h-28 border-2 border-green-400' />
          <h1 className='text-xl uppercase'>{cardData[index].name}</h1>
          <h1>{cardData[index].courseName}</h1>
          <h1>{cardData[index].rollNo}</h1>
        </div>
        <div className='bg-green-400 h-[3vh] w-full'></div>
      </div>
      <div className='flex items-center justify-between w-[20%]'>
        <button className='py-2 px-6 bg-blue-500 text-white rounded-[19px] hover:bg-blue-600 duration-300' onClick={handlePrev}>PREV</button>
        <button className='py-2 px-6 bg-blue-500 text-white rounded-[19px] hover:bg-blue-600 duration-300' onClick={handleNext}>NEXT</button>
      </div>
      <div>
        <button className='py-2 px-6 bg-blue-500 text-white rounded-2xl hover:bg-blue-600 duration-300'>DOWNLOAD CARD</button>
      </div>
    </div>
    </>
  )
}

export default page;