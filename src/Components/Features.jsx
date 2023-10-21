
import { useEffect, useState } from "react";
import ReactStars from 'react-rating-star-with-type'
const Features = () => {
    const [star, setStar] = useState(5);

    const onChange = (nextValue) => {
        setStar(nextValue)
    }
    const [features, setFeatured] = useState([])
    useEffect(() => {
        fetch('/brand.json')
            .then(rcs => rcs.json())
            .then(data => setFeatured(data))
    }, [])
    return (
        <div className="">
            <h1 className="text-4xl font-bold text-center my-10 underline text-gray-300">Our Feature product</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    features.map(feature => <>

                        <div data-aos="zoom-in-down"
                            data-aos-easing="linear"
                            data-aos-duration="1700" className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="p-8 rounded-t-lg" src={feature.image} alt="product image" />
                            </a>
                            <div className="px-5 pb-3">
                                <a href="#">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{feature.title}</h5>
                                </a>
                                <div className="flex items-center mt-2.5 mb-5">
                                    <div>
                                        <ReactStars
                                            onChange={onChange}
                                            value={feature.rating}
                                            edit={true}
                                            activeColors={["red", "orange", "#FFCE00", "#9177FF", "#8568FC",]}
                                        />
                                    </div>
                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{feature.rating}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${feature.price}</span>

                                </div>
                            </div>
                        </div>

                    </>)
                }
            </div>
        </div>
    );
};

export default Features;