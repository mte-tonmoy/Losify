import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Form, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Contct from './Components/Contct.jsx'
import Header from './Components/Header.jsx'
import SignUp from './Components/SignUp.jsx'
import Login from './Components/Login.jsx'
import Item from './Components/Item.jsx'
import Upload_Item from './Components/Upload.jsx'
import Upload from './Components/Upload.jsx'
import AuthProvider from '../Provider/AuthProvider.jsx'
import PrivateRoute from './Components/PrivateRoute.jsx'
import Entry from './Components/Entry.jsx'
import Manage from './Components/ManageDataTable.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'about',
        element:<About/>,
      },
      {
        path:'header',
        element:<Header/>,
      },
      {
        path:'contact',
        element:<Contct/>,
      },
      {
        path:'signup',
        element:<SignUp/>,
      },
      {
        path:'login',
        element:<Login/>,
      },
      {
        path:'/item',
        element:<Item/>,
      },
      {
        path:'/entry/:id',
        element:<Entry/>,
      },
      {
        path:'manage',
        element:<Manage/>,
      },
      {
        path:'upload',
        element:(
          <PrivateRoute>
            <Upload/>
          </PrivateRoute>
        ),
      },
     

  ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
</React.StrictMode>
)
