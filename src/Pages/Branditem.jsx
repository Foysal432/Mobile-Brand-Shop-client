
import { useLoaderData } from 'react-router-dom';
import BrandsDetails from '../Components/BrandsDetails';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Branditem = () => {
    const loaderBrands =useLoaderData()
    
    return (
        <div>  
           
            <>
      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://i.ibb.co/gDVbGzm/apple-laptop-store-banner.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[400px]' src="https://i.ibb.co/f2K89c7/Alpha-7-RV-Website-Banner-XWqj-Yld.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[400px]' src="https://i.ibb.co/JFWHknL/2d8e7d11982290-5603273f86da7.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[400px]' src="https://i.ibb.co/MGtYVYF/CO-Banner-Blog-v3-2048x2048.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img  className='w-full h-[400px]' src="https://i.ibb.co/XVZk2xb/SONY-XPERIA-1-III-5-G-MAIN-BANNER-ALEZAY-KUWAIT.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[400px]' src="https://i.ibb.co/c3Q636r/SEA-Mac-Book-Pro-14-inch-16-inch-M2-Web-Banner-Avail-1400x700-FFH.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[400px]' src="https://i.ibb.co/fXDzJtd/samsung-banner.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[400px]' src="https://i.ibb.co/p4s3rRv/HTCOne.png" alt="" /></SwiperSlide>
       
      </Swiper>
    </>
        <div className='mt-10'>
        {
            loaderBrands.length == 0 ? <p className='text-4xl font-bold text-center flex justify-center items-center'>No data </p>: <div className='grid md:grid-cols-2 gap-4 max-w-5xl mx-auto'>
            {
                loaderBrands?.map(data=><BrandsDetails key={data._id} BrandsDetails={data} ></BrandsDetails>)
            }
        </div>
           }
        </div>
        </div>
    );
};

export default Branditem;