import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const [detail, setDetails] = useState({})
    const { id } = useParams()
    const Datas = useLoaderData()
    useEffect(() => {
        const findData = Datas?.find((data) => data.id == id)
        setDetails(findData)
    }, [id, Datas])
    console.log(detail);
    return (
        <div>
            <h1>This is Details Route</h1>
        </div>
    );
};

export default Details;