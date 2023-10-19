import { useLoaderData } from "react-router-dom";

const MyCard = () => {
    const items = useLoaderData()
    console.log(items);
    return (
        <div>
            <h1>My Card</h1>
            
           
        </div>
    );
};

export default MyCard;