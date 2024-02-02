import React from 'react'
import { NavLink } from 'react-router-dom'

const Admin = () => {
  return (
    <>
      <div
          className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
      >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                  <NavLink
                  to="/register"
                      className={({isActive}) =>
                          `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-purple-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0`
                      }
                  >
                      Register
                  </NavLink>
              </li>
          </ul>
      </div>
    </>
  )
}

export default Admin