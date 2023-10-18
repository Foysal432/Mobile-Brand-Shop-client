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
import PrivateRoute from './PrivateRoute';
import Form from './Components/Form';
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
    element:<PrivateRoute><MyCard></MyCard></PrivateRoute>
   },
   {
    path:"/login",
    element:<Login></Login>
   },
   {
    path:'/register',
    element:<Register></Register>
   },
   {
    path:"/form",
    element:<Form></Form>
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
