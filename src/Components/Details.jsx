import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../assets/AuthProvider";
import Swal from "sweetalert2";
import ReactStars from 'react-rating-star-with-type'

const Details = () => {
    const [star, setStar] = useState(5);

    const onChange=(nextValue)=>{
        setStar(nextValue)
    }
    const { user } = useContext(AuthContext)
    const email = user && user.email;
    const details = useLoaderData()
    const { image, name, description, rating, price, type, brand } = details

    const handleadd = () => {
        //   const data = {details,email}
        const data = { image, name, description, rating, price, type, brand, email }
        console.log(data);
        // send data to the server
        fetch('https://assingment-10-server-xi.vercel.app/addproduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire(
                        'Good job!',
                        'You product is Added in My Cart Page!',
                        'success'
                    )
                }
            })
    }
    return (
        <div>

            <div data-aos="flip-right"  data-aos-easing="linear"
     data-aos-duration="1500" className="card mx-auto w-3/4 lg:card-side bg-base-100 shadow-xl">
                <figure><img src={details.image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{details.description}</h2>
                    <p name='name' className="text-3xl font-bold text-gray-300">Name: {details.name}</p>
                    <p name='brand' className="text-3xl font-bold text-gray-300">Brand: {details.brand}</p>

                    <p name='category' className="text-3xl font-bold text-gray-300">Category: {details.type}</p>
                    <p name='price' className="text-3xl font-bold text-gray-300">Price: {details.price}$</p>
                    <div className="">
                        <ReactStars
                            onChange={onChange}
                            value={details.rating}
                            edit={true}
                            activeColors={["red", "orange", "#FFCE00", "#9177FF", "#8568FC",]}
                        />
                    </div>
                    <div className="card-actions justify-end">
                        <Link><button onClick={handleadd} className="btn btn-primary w-full">Add to cart</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Details;