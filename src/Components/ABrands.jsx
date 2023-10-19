import { Link } from "react-router-dom";

const ABrands = ({brandmain}) => {
    const {brand,image}=brandmain
    const handlebrand =brand=>{
        console.log(brand);
    }
    return (
        <div>  
            <Link to={`/branditem/${brand}`}>    
<div onClick={()=>handlebrand(brand)}  className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
 <img className="h-28" src={image} alt="" />
    <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"></h5>
    </a>
    <button className="mb-3 font-bold text-2xl my-2 text-gray-500 dark:text-gray-400">{brand}</button>
     
</div>
</Link>
        </div>
    );
};

export default ABrands;