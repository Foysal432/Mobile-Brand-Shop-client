import React from 'react';

const Form = () => {
    const addForm = event =>{
        event.preventDefault()
        const form = event.target;
        const brand = form.brand.value;
        const image = form.image.value;
console.log(brand,image);
const newBrands ={brand,image}
console.log(newBrands);
// send data to the server
fetch('http://localhost:5000/brands',{
    method:'POST',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(newBrands)
})
.then(res=>res.json())
.then(data=>{
    console.log(data);
})
    }
    return (
        <div>
            <form onSubmit={addForm} action="">
            <input type="text" placeholder="Type here" name='brand' className="input input-bordered input-primary w-full max-w-xs" />
            <input type="text" placeholder="URL" name='image' className="input input-bordered input-primary w-full max-w-xs" />
            <input className='btn' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default Form;