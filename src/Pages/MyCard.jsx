import { useLoaderData } from "react-router-dom";

const MyCard = () => {
    const addcard = useLoaderData()
    console.log(addcard);
    return (
        <div>
            <h1>My Card</h1>
            
           
        </div>
    );
};

export default MyCard;