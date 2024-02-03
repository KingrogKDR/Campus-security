import React, { useState } from 'react'

const Admin = () => {

  const [visitors, setVisitors] = useState(0)

  const [isDropdown, setDropdown] = useState(false)

  const toggleDrop = () => {
    setDropdown(!isDropdown)
  }

  return (
    <>
      <div className='w-full h-fit top-0 right-0 bg-[#d4d4d4] pb-12'>
        <div className='lg:ml-[290px] lg:space-y-10 space-y-3'>
          <p className='p-8 font-semibold text-2xl lg:text-4xl shadow-lg'>Dashboard</p>
          <div className='flex flex-wrap items-center justify-center mt-10'>
            <div className='bg-white pt-10 pb-8 px-8 w-11/12 mt-2 rounded-2xl'><span className='text-2xl font-semibold'>Visitors <span className='bg-[#1a3a3a] text-white rounded-full px-3 py-1'>{visitors}</span></span> 
              <div className='w-full flex justify-end mt-10'>
                <button onClick={toggleDrop}>
                  {isDropdown ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 lg:w-10 lg:h-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 lg:w-10 lg:h-10">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  )}
                </button>
              </div>
              <div className={`${isDropdown ? 'grid' : 'hidden'} gap-y-3`}>
                <span>Visitors 1</span>
                <span>Visitors 2</span>
                <span>Visitors 3</span>
              </div>
          </div>
          </div>
          <div className='flex flex-wrap items-center justify-center'>
            <div className='bg-white pt-10 pb-8 px-8 w-11/12 mt-2 text-2xl rounded-2xl'>Faculties
              <div className='w-full flex justify-end mt-10'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 lg:hidden">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 hidden lg:flex">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </div>
          </div>
          <div className='flex flex-wrap items-center justify-center'>
            <div className='bg-white pt-10 pb-8 px-8 w-11/12 mt-2 text-2xl rounded-2xl'>Students
              <div className='w-full flex justify-end mt-10'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 lg:hidden">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 hidden lg:flex">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Admin