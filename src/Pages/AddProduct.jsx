
const AddProduct = () => {
    const handleAdd = event =>{
        event.preventDefault()
        const form =
    }
    return (
        <div>
            <div className="bg-gray-300 shadow-md w-4/5 mx-auto mt-10 rounded-md">
                <h1 className="text-center text-4xl font-bold py-4 text-orange-500">Add Your Product</h1>
                <form onSubmit={handleAdd} className="">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-4">

                        <div className="w-full">
                            <h1 className="text-2xl font-bold p-2">Image:</h1>
                            <input type="text" placeholder="URL" name="image" className="input input-bordered input-success w-full" />
                        </div>
                        {/* 2nd */}
                        <div className="w-full">
                            <h1 className="text-2xl font-bold p-2">Name:</h1>
                            <input type="text" placeholder="Enter Your Product Name" name="Name" className="input input-bordered input-success w-full" />
                        </div>
                        {/* 3rd */}
                        <div className="w-full">
                            <h1 className="text-2xl font-bold p-1">Brand Name</h1>
                            <select name="brandname" className="select select-success w-full">
                                <option disabled selected>Select A Brand</option>
                                <option>Apple</option>
                                <option>Samsung</option>
                                <option>Htc</option>
                                <option>Itel</option>
                                <option>Sony</option>
                                <option>Symphony</option>
                            </select>
                        </div>
                        {/* 4rth */}
                        <div className="w-full">
                            <h1 className="text-2xl font-bold p-1">Type:</h1>
                            <select name="type" className="select select-success w-full">
                                <option disabled selected>Select A Type</option>
                                <option>Mobile</option>
                                <option>Laptop</option>
                                <option>Tv</option>
                                <option>Computer</option>
                                <option>Camera</option>
                                <option>Watch</option>
                            </select>
                        </div>
                        {/* 5th */}
                        <div className="w-full">
                            <h1 className="text-2xl font-bold p-2">Price:</h1>
                            <input type="text" placeholder="Price" name="price" className="input input-bordered input-success w-full" />
                        </div>
                        {/* 6th */}
                        <div className="w-full">
                            <h1 className="text-2xl font-bold p-2">Rating:</h1>
                            <input type="text" placeholder="Enter Your Rating" name="rating" className="input input-bordered input-success w-full" />
                        </div>
                    </div>
                    {/* 7th */}
                    <div className=" pb-5">
                        <h1 className="text-2xl font-bold p-2 text-center">Description:</h1>
                        <input type="text" placeholder="description" name="description" className="input input-bordered input-success w-full" />
                    </div>
                    <input className="btn btn-secondary w-full bg-orange-500" type="submit" value="Add Your Product" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;