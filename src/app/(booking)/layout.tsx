import React from 'react'
import ProgressBar from '@/components/progressbar/ProgressBar'
const BookingLayout = (props : {
    children: React.ReactNode
}) => {
  return (
    <div className='flex flex-col'>
      <div style={{ position: 'sticky', top: 0}}>
        <ProgressBar/>
      </div>
      <div>
        {props.children}
      </div>
    </div>
  )
}

export default BookingLayout
