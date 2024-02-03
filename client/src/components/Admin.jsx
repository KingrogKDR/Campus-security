import React from 'react'
import { NavLink } from 'react-router-dom'

const Admin = () => {
  return (
    <>
      <div className='w-full h-screen top-0 right-0 bg-[#d4d4d4]'>
        <div className='lg:ml-[290px] lg:space-y-10 space-y-3'>
          <p className='p-8 font-semibold text-2xl lg:text-4xl shadow-lg'>Dashboard</p>
          <div className='flex flex-wrap items-center justify-center mt-10'>
            <div className='bg-white pt-10 pb-16 px-8 w-11/12 mt-2 text-2xl'>Visitors</div>
          </div>
          <div className='flex flex-wrap items-center justify-center'>
            <div className='bg-white pt-10 pb-16 px-8 w-11/12 mt-2 text-2xl'>Faculties</div>
          </div>
          <div className='flex flex-wrap items-center justify-center'>
            <div className='bg-white pt-10 pb-16 px-8 w-11/12 mt-2 text-2xl'>Students</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Admin