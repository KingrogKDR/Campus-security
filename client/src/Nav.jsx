import { useState } from "react"
import { Link } from "react-router-dom"

// const [visitors, setVisitors] = useState(0)

function Nav() {

  return (
    <>
      <div className="w-full h-screen bg-[#d4d4d4]">
        {/* navbar/sidebar */}
        <div className="md:h-screen md:w-72 w-full h-16 bg-[#dccfec] flex flex-wrap justify-start items-center md:items-start top-0 right-0"> 
          <div className="cursor-pointer ml-8 flex items-center gap-5 md:hidden">
            <Link className="text-lg mr-10 font-medium" to='/'>Dashboard</Link>
            <Link className="text-sm text-slate-700">User Logs</Link>
            <Link className="text-sm text-slate-700">Complaint Desk</Link>
            <Link className="text-sm text-slate-700">Register User</Link>
          </div>
          <div className="md:block hidden w-full h-full" id="Links">
            <div className="w-full flex gap-5 justify-center items-center py-6 border-b-[1px] border-b-[#1a3a3a] h-1/6">
              <div className="w-1/3 h-20 ml-5">
                <img className="w-full h-full rounded-full shadow-md border-2 border-slate-300" src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
              </div>
              <span className="w-2/3 text-2xl">Profile Name</span>
            </div>
            <div className="border-b-[1px] border-b-[#1a3a3a] h-4/6">
              <Link className="block m-8 text-lg">User Logs</Link>
              <Link className="block m-8 text-lg">Complaint Desk</Link>
              <Link className="block m-8 text-lg">Register</Link>
            </div>
            <div className="h-1/6 ml-8 flex flex-wrap gap-x-32">
              <span className="mt-5 text-lg">Logout</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mt-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-5/6 shadow-lg rounded-lg bg-white mt-8 mx-10 p-4 h-1/4">
          <span className="mr-2">Visitors</span>
          <span className="w-4 p-2 rounded-full text-white bg-[#1a3a3a]">10</span> 
        </div>
        <div className="w-5/6 shadow-lg rounded-lg bg-white mt-8 mx-10 p-4 h-1/4">
          Faculties
          <span className="w-4 bg-[#1a3a3a]"></span> 
        </div>
        <div className="w-5/6 shadow-lg rounded-lg bg-white mt-8 mx-10 p-4 h-1/4">
          Students
          <span className="w-4 bg-[#1a3a3a]"></span> 
        </div>
      </div>
    </>
  )
}

export default Nav
