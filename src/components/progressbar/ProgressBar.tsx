import React from 'react'
import Image from 'next/image'

const ProgressBar = () => {
  return (
    <div className='w-full h-[75px] flex flex-row shadow-xl'>
      <div className='h-full w-[100px] bg-red-300'>
        <div className='h-full w-full flex justify-center items-center'>
          <Image src='/images/ProgressBar/Group.svg' alt='exitButton' width={20} height={20}/>
        </div>
      </div>
      <div className='h-full w-[1650px] flex flex-row'>
        <div className='h-full w-[267px]'>
          <div>
            something
          </div>
        </div>
        <div className='h-full w-[267px]'>
          something
        </div>
        <div className='h-full w-[267px]'>
          something
        </div>
        <div className='h-full w-[267px]'>
          something
        </div>
        <div className='h-full w-[267px]'>
          something
        </div>
        <div className='h-full w-[267px] bg-red-300'>
          something
        </div>
      </div>
      <div className='h-full w-[146px]'>
        <div>
          total price 
        </div>
      </div>
    </div>
  )
}

export default ProgressBar