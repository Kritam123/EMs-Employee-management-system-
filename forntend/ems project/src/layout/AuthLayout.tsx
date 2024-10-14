import AuthNavbar from '@/components/Navbar/AuthNavbar'
import React from 'react'

const AuthLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='overflow-hidden '>
        <AuthNavbar/>
        {children}
    </div>
  )
}

export default AuthLayout