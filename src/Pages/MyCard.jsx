import { Link, useLoaderData } from "react-router-dom";
import AddCard from "../Components/AddCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../assets/AuthProvider";
import Swal from "sweetalert2";

const MyCard = () => {
//     const addcard = useLoaderData()
// console.log(addcard);
const {user}=useContext(AuthContext)
console.log(user.email);
const [datas,setData] =useState([])
// const [Duser, setUser]=useState(datas)
useEffect(()=>{
    fetch(`http://localhost:5000/addproduct/${user.email}`)
    .then(res=>res.json())
    .then(data=>setData(data))
},[user])
// console.log(datas);
const handleDelate =_id =>{


    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:5000/addproduct/${_id}`,{
                method:'DELETE',
            
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if (data.deletedCount > 0 ) {
                    Swal.fire(
                        'Deleted!',
                        'Your Product has been deleted.',
                        'success'
                      )
                    const remaining =datas.filter(users=>users._id !==_id)
                    setData(remaining)
                  
                }
            })
        }
      })




console.log(_id);
// fetch(`http://localhost:5000/addproduct/${_id}`,{
//     method:'DELETE',

// })
// .then(res=>res.json())
// .then(data=>{
//     console.log(data);
//     if (data.deletedCount > 0 ) {
//         Swal.fire(
//             'Deleted!',
//             'Your file has been deleted.',
//             'success'
//           )
//         const remaining =datas.filter(users=>users._id !==_id)
//         setData(remaining)
      
//     }
// })
}
    return (
        <div>
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mt-10">
           {
            datas.map(data=> <div key={data._id}>
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img className="h-56" src={data.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold">Brand: {data.brand}</h2>
                        <h1 className="text-2xl font-bold">Name: {data.name}</h1>
                        <h1><span className="text-2xl font-bold">Details:</span> {data.description}</h1>
                        <h1 className="text-2xl font-bold">Rrating:{data.rating}</h1>
                        <p className="text-2xl font-bold">Price: {data.price}$</p>
                        <div className="card-actions justify-end">
                            <button onClick={()=>handleDelate(data._id)} className="btn btn-primary w-full">Delate</button>
                        </div>
                    </div>
                </div>
            </div>
            )
           }
         </div>
        </div>
    );
};

export default MyCard;