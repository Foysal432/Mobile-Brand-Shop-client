import { Link } from "react-router-dom";
import { useState } from "react";
import ReactStars from 'react-rating-star-with-type'
const BrandsDetails = ({BrandsDetails}) => {
    const [star, setStar] = useState(10);

    const onChange=(nextValue)=>{
        setStar(nextValue)
    }

    console.log(BrandsDetails);
    const {_id,type,rating,price,name,image,brand} = BrandsDetails
    return (
        <div>
<div className=" h-[500px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="p-8 h-72 rounded-t-lg" src={image} alt="product image" />
    </a>
    <div className="px-4 pb-5">
        <div className="grid grid-cols-2 gap-2 text-xl font-semibold">
        <h1><span className="font-bold text-2xl">Name:</span> {name}</h1>
        <h1><span className="font-bold text-2xl">Brand:</span> {brand}</h1>
        <h1><span className="font-bold text-2xl">Type: </span>{type}</h1>
        <h1><span className="font-bold text-2xl">Price: </span>{price}$</h1>
        </div>
        <div className="flex items-center mt-2.5 mb-5">
          <div>
          <ReactStars 
    onChange={onChange} 
    value={rating}  
    edit={true}  
    activeColors={[ "red", "orange", "#FFCE00", "#9177FF","#8568FC",]} 
    />
          </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{rating}</span>
        </div>
        <div className="flex items-center justify-between">
            <Link to={`/details/${_id}`} ><button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Details</button></Link>
            <Link to={`/update/${_id}`}><button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button></Link>
        </div>
    </div>
</div>
  
         
        </div>
    );
};

export default BrandsDetails;