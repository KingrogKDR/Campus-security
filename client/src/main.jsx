import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Login from './components/Login'
import { UserContextProvider } from './providers/UserProvider'
import Dashboard from './components/Dashboard'
import Admin from './components/Admin'

const myRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/login' element={<Login />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/admin' element={<Admin />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>

    <RouterProvider router={myRouter}/>
    </UserContextProvider>
  </React.StrictMode>,
)
