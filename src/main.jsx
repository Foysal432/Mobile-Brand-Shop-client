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
   }
  ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
