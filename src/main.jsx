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
import Branditem from './Pages/Branditem';
import Details from './Components/Details';
import Updates from './Components/Updates';
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
    element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
   },
  
  {
    path:'/mycart',
    element:<PrivateRoute><MyCard></MyCard></PrivateRoute>,

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
   },
   {
    path:'/branditem/:brand',
    element:<Branditem></Branditem>,
    loader:({params})=>fetch(`http://localhost:5000/items/${params.brand}`)
   },
   {
    path:'/details/:detail',
    element:<PrivateRoute><Details></Details></PrivateRoute>,
    loader:({params})=>fetch(`http://localhost:5000/items1/${params.detail}`)
   },
   {
    path:'/update/:id',
    element:<PrivateRoute><Updates></Updates></PrivateRoute>,
    loader:({params})=>fetch(`http://localhost:5000/update/${params.id}`)
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
