import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout';
import Home from './Pages/Home';
import Error from './Pages/Error';
import AddProduct from './Pages/AddProduct';
import MyCard from './Pages/MyCard';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AuthProvider from './assets/AuthProvider';
const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<Error></Error>,
    element:<Layout></Layout>,
    children:[{
      path:'/',
      element:<Home></Home>
    },
   {
    path:"/addproduct",
    element:<AddProduct></AddProduct>
   },
   {
    path:"/mycart",
    element:<MyCard></MyCard>
   },
   {
    path:"/login",
    element:<Login></Login>
   },
   {
    path:'/register',
    element:<Register></Register>
   }
  ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
)
