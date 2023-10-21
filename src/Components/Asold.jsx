import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { useState } from "react";
import ReactStars from 'react-rating-star-with-type'
const Asold = ({asold}) => {
  const [star, setStar] = useState(5);

  const onChange=(nextValue)=>{
      setStar(nextValue)
  }
    return (
        <div>
     <div data-aos="zoom-in-right"  data-aos-easing="linear"
     data-aos-duration="1500" className="card border">
  <figure><img className='h-52' src={asold.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{asold.title}</h2>
  <div>
  <ReactStars 
    onChange={onChange} 
    value={asold.rating}  
    edit={true}  
    activeColors={[ "red", "orange", "#FFCE00", "#9177FF","#8568FC",]} 
    />

  </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary w-full">See More</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Asold;