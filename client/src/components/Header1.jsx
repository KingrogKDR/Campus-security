import React,{useState} from 'react'
import { Link,NavLink } from 'react-router-dom'

const Header1 = () => {
  
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }
  return (
    <header className='shadow sticky z-10 left-0 top-0'>
        <nav className='lg:w-[18rem] w-dvw bg-[#DCCfec] lg:h-dvh absolute h-[110px] border-b-[1px] border-slate-400 lg:border-none'>
            <div className='flex flex-col items-center space-y-16 h-fit lg:h-full p-6 px-5'>
                <div className='flex space-x-4 w-full items-center py-5 lg:border-b-2'>
                    <Link to="/">
                        <div className='bg-[#c4c4c4] rounded-full w-10 h-10'></div>
                    </Link>
                    <h1 className='text-2xl'>Admin</h1>
                    <div className='w-full flex justify-end lg:hidden'>
                        <button onClick={toggleMenu}> 
                            {isMenuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                            
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                            )}
                        </button>
                    </div>   
                </div>
                <div className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex space-y-20 flex-col py-10 w-full px-6`}>
                    <Link to="/admin" className='py-2 px-4 text-xl hover:underline'>User Logs</Link>
                    <Link to="/complain"  className='py-2 px-4 text-xl hover:underline'>Complaint Desk</Link>
                    <NavLink to="/register" className={({isActive})=>`py-2 px-4 text-xl ${isActive ? '' : 'text-black'} hover:underline`}>Register</NavLink>
                    <div className='border-t-2 w-full flex items-center justify-center pt-10 text-xl'>
                        <button className='hover:underline'>
                            Logout
                        </button>        
                    </div>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header1