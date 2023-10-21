import React, { useEffect, useState } from 'react';
import ABrands from './ABrands';

const Brand = () => {
    const [brands,setBrands] =useState([])
    useEffect(()=>{
        fetch('https://assingment-10-server-xi.vercel.app/brands')
        .then(res=>res.json())
        .then(data=>setBrands(data))
    },[])
    return (
        <div className=''>
            <div className='text-2xl my-3'>
                <h1 className='text-4xl font-bold my-2'>OUR BRANDS</h1>
                <p className='text-gray-400'>There are many variations of passages of brands available,</p>
            </div>
      <div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-5'>
      {
        brands.map(brand=><ABrands key={brand._id} brandmain={brand}></ABrands>)
       }
      </div>
        </div>
    );
};

export default Brand;