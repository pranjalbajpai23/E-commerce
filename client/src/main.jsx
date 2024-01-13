import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LandingPage from './routes/LandingPage.jsx'
import ProductListing from './routes/ProductListing.jsx'
import FullPage from './components/FullPage.jsx'
import {Provider} from "react-redux";
import siteStore from './store/index.js'
import Bag from './components/Bag.jsx'
import Login from './routes/Login.jsx'

const router=createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[
    {
      path:"/",
      element:<LandingPage/>
    },
    {
      path:"/listing",
      element:<ProductListing/>
    },
    {
      path:"listing/FullPage",
      element:<FullPage/>
    },
    {
      path: "/bag",
      element: <Bag />

    },
    {
      path:"/login",
      element:<Login/>
    }
  ]

}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={siteStore}>
    <RouterProvider router={router}/> 
    </Provider>              
  </React.StrictMode>,
)
