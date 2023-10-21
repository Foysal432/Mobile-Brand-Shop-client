import { Link, useLoaderData } from "react-router-dom";
import AddCard from "../Components/AddCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../assets/AuthProvider";
import Swal from "sweetalert2";
// import { useState } from "react";
import ReactStars from 'react-rating-star-with-type'
const MyCard = () => {
    const [star, setStar] = useState(5);

    const onChange = (nextValue) => {
        setStar(nextValue)
    }
    const { user } = useContext(AuthContext)
    console.log(user.email);
    const [datas, setData] = useState([])
    // const [Duser, setUser]=useState(datas)
    useEffect(() => {
        fetch(`https://assingment-10-server-xi.vercel.app/addproduct/${user.email}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [user])
    // console.log(datas);
    const handleDelate = _id => {


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
                fetch(`https://assingment-10-server-xi.vercel.app/addproduct/${_id}`, {
                    method: 'DELETE',

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            )
                            const remaining = datas.filter(users => users._id !== _id)
                            setData(remaining)

                        }
                    })
            }
        })
     
    }
    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mt-10">
                {
                    datas.map(data => <div key={data._id}>
                        <div className="card  bg-base-100 shadow-xl">
                            <figure><img className="h-56" src={data.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-2xl font-bold">Brand: {data.brand}</h2>
                                <h1 className="text-2xl font-bold">Name: {data.name}</h1>
                                <h1><span className="text-2xl font-bold">Details:</span> {data.description}</h1>
                                <div className="flex">

                                    <ReactStars
                                        onChange={onChange}
                                        value={data.rating}
                                        edit={true}
                                        activeColors={["red", "orange", "#FFCE00", "#9177FF", "#8568FC",]}
                                    />
                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{data.rating}</span>
                                </div>
                                <p className="text-2xl font-bold">Price: {data.price}$</p>
                                <div className="card-actions justify-end">
                                    <button onClick={() => handleDelate(data._id)} className="btn btn-primary w-full">Delate</button>
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