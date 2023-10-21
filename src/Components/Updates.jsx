import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Updates = () => {
    const datas =useLoaderData()
    console.log(datas);
    const{_id,name,brand,type,price,rating,description,image}=datas
    const handleupdate = event =>{
        event.preventDefault()
        const form = event.target;
        const image = form.image.value;
        
        const name = form.name.value;
        const brand = form.brandname.value;
        const type= form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
        console.log(image,name,brand,type,price,rating,description)
        const allItem ={image,name,brand,type,price,rating,description}
        console.log(allItem);
       // send data to the server
       fetch(`https://assingment-10-server-xi.vercel.app/update/${_id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(allItem)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
       if (data.modifiedCount > 0) {
        Swal.fire(
            'Good job!',
            'You item Updated!',
            'success'
          )
       }
    })
    }


    return (
        <div>
            <div className="bg-gray-300 shadow-md w-4/5 mx-auto mt-10 rounded-md">
                <h1 className="text-center text-4xl font-bold py-4 text-orange-500">Update Your Product</h1>
                <form onSubmit={handleupdate} >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-4">
                        <div className="w-full">
                            <h1 className="text-2xl font-bold p-2">Image:</h1>
                            <input type="text" placeholder="URL" name="image" defaultValue={image} className="input input-bordered input-success w-full" />
                        </div>
                        {/* 2nd */}
                        <div className="w-full">
                            <h1 className="text-2xl font-bold p-2">Name:</h1>
                            <input type="text" placeholder="Enter Your Product Name" defaultValue={name} name="name" className="input input-bordered input-success w-full" />
                        </div>
                        {/* 3rd */}
                        <div className="w-full">
                            <h1 className="text-2xl font-bold p-1">Brand Name</h1>
                            <input type="text" placeholder="Price" name="brandname" defaultValue={brand}  className="input input-bordered input-success w-full" />
                        </div>
                        {/* 4rth */}
                        <div className="w-full">
                            <h1 className="text-2xl font-bold p-1">Type:</h1>
                            <input type="text" placeholder="Price" defaultValue={type} name="type" className="input input-bordered input-success w-full" />
                        </div>
                        {/* 5th */}
                        <div className="w-full">
                            <h1 className="text-2xl font-bold p-2">Price:</h1>
                            <input type="text" placeholder="Price" defaultValue={price} name="price" className="input input-bordered input-success w-full" />
                        </div>
                        {/* 6th */}
                        <div className="w-full">
                            <h1 className="text-2xl font-bold p-2">Rating:</h1>
                            <input type="text" placeholder="Enter Your Rating" defaultValue={rating} name="rating" className="input input-bordered input-success w-full" />
                        </div>
                    </div>
                    {/* 7th */}
                    <div className=" pb-5">
                        <h1 className="text-2xl font-bold p-2 text-center">Description:</h1>
                        <input type="text" placeholder="description" defaultValue={description} name="description" className="input input-bordered input-success w-full" />
                    </div>
                    <input className="btn btn-secondary w-full bg-orange-500" type="submit" value="Update Now" />
                </form>
            </div>
        </div>
    );
};

export default Updates;