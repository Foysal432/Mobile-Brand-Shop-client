
import { useLoaderData } from 'react-router-dom';
import BrandsDetails from '../Components/BrandsDetails';

const Branditem = () => {
    const loaderBrands =useLoaderData()
    
    return (
        <div>  
           {
            loaderBrands.length == 0 ? <p className='text-4xl font-bold text-center flex justify-center items-center'>No data </p>: <div className='grid md:grid-cols-2 gap-4 max-w-5xl mx-auto'>
            {
                loaderBrands?.map(data=><BrandsDetails key={data._id} BrandsDetails={data} ></BrandsDetails>)
            }
        </div>
           }
        </div>
    );
};

export default Branditem;