import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Login from './components/Login'
<<<<<<< HEAD
import Register from './components/Register'
=======
import { UserContextProvider } from './providers/UserProvider'
import Dashboard from './components/Dashboard'
import Admin from './components/Admin'
>>>>>>> daa6a7f0156fb81a292e1ce527fe9418ba8157bd

const myRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/login' element={<Login />}/>
<<<<<<< HEAD
      <Route path='/register' element={<Register />}/>
=======
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/admin' element={<Admin />}/>
>>>>>>> daa6a7f0156fb81a292e1ce527fe9418ba8157bd
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
