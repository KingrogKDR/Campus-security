import React,{useContext} from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Header1 = () => {

  return (
    <header className='shadow sticky z-10 left-0 '>
        <nav className='w-[18rem] bg-[#DCCfec] h-dvh absolute  '>
            <div className='flex flex-col items-center justify-between h-full p-10 px-5'>
                <div className='flex space-x-10 w-full items-center border-b-2 py-5'>
                <Link to="/">
                    <div className='bg-[#c4c4c4] rounded-full w-10 h-10'></div>
                </Link>
                <h1 className='text-2xl'>User1</h1>   
                </div>
                <div className='flex space-y-20 flex-col py-10 w-full px-10'>
                    <Link to="/admin" className='text-xl'>User Logs</Link>
                    <Link to="/complain"  className='text-xl'>Complain Desk</Link>
                    <Link to="/register"  className='text-xl'>Register</Link>
                </div>
                <div className='border-t-2 w-full flex items-center justify-center pt-10'>
                    <button >
                        Logout
                    </button>
                        
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header1