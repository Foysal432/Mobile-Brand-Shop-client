import Banner from "../Components/Banner";
import Brand from "../Components/Brand";
import Features from "../Components/Features";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-5xl mx-auto">
            <Brand></Brand>
            <div className="mt-12">
            <Features></Features>
            </div>
            </div>
            

        </div>
    );
};

export default Home;