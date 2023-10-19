import { useEffect, useState } from "react";
import Asold from "./Asold";

const RecentsSold = () => {
    const [solds, setSold] = useState([])
    useEffect(() => {
        fetch('/sold.json')
            .then(res => res.json())
            .then(data => setSold(data))
    }, [])
    return (
        <div>
            <h1 className="text-4xl my-5 font-bold text-gray-300">Recently Sold Products</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                  
                     solds.map(asold=><Asold asold={asold} key={asold.id}></Asold>)
                }
            </div>
        </div>
    );
};

export default RecentsSold;