import React from 'react';

const Asold = ({asold}) => {
    return (
        <div>
            <div className="card border">
  <figure><img className='h-52' src={asold.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{asold.title}</h2>
    <div className="card-actions justify-end">
      <button className="btn btn-primary w-full">See More</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Asold;