import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../assets/AuthProvider";
import Swal from "sweetalert2";

const Details = () => {
    const {user} = useContext(AuthContext)
    const email =user && user.email;
    const details = useLoaderData()
    const handleadd = () =>{
      const data = {details,email}
      console.log(data);
         // send data to the server
         fetch('http://localhost:5000/addproduct',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
           if (data.insertedId) {
            Swal.fire(
                'Good job!',
                'You Added A Product!',
                'success'
              )
           }
        })
    }
    return (
        <div>
           
            <div className="card mx-auto w-3/4 lg:card-side bg-base-100 shadow-xl">
                <figure><img src={details.image}alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{details.description}</h2>
                   <p name='name' className="text-3xl font-bold text-gray-300">Name: {details.name}</p>
                   <p name='brand' className="text-3xl font-bold text-gray-300">Brand: {details.brand}</p>
                   <p name='category' className="text-3xl font-bold text-gray-300">Category: {details.type}</p>
                   <p name='price' className="text-3xl font-bold text-gray-300">Price: {details.price}$</p>
                   <p></p>
                    <div className="card-actions justify-end">
                        <Link><button onClick={handleadd} className="btn btn-primary w-full">Add to cart</button></Link>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Details;