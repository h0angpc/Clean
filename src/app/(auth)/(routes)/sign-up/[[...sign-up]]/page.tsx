import React from 'react'
import { SignUp } from '@clerk/nextjs'

// export function generateStaticParams() {
//   return [{ 'sign-up': [] }]
// }

const SignOutPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <SignUp/>
    </div>
  )
}

export default SignOutPage
