import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Login from './components/Login'
<<<<<<< HEAD
import { UserContextProvider } from './providers/UserProvider'
import Dashboard from './components/Dashboard'
import Register from './components/Register'
import Admin from './components/Admin'
=======
import Register from './components/Register'
>>>>>>> 525d15a6bca658b5c05673b122798ab1bf873a99

const myRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/login' element={<Login />}/>
<<<<<<< HEAD
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/admin' element={<Admin />}/>
=======
>>>>>>> 525d15a6bca658b5c05673b122798ab1bf873a99
      <Route path='/register' element={<Register />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myRouter}/>
  </React.StrictMode>
)