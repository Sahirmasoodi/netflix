import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Browser from './browser-comp/Browser'
import LoginPage from './LoginPage'

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path:'/',
      element:<LoginPage/>
    },
    {
      path:'/browser',
      element:<Browser/>
    },
  ])
  return (
    <div>
    <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
