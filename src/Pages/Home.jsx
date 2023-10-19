import Banner from "../Components/Banner";
import Brand from "../Components/Brand";
import Features from "../Components/Features";
import Footer from "../Components/Footer";
import RecentsSold from "../Components/RecentsSold";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-5xl mx-auto">
            <Brand></Brand>
            <div className="mt-12">
            <Features></Features>
            </div>
            <div className="my-14">
            <RecentsSold></RecentsSold>
            </div>
            <Footer></Footer>
            
            </div>
           

        </div>
    );
};

export default Home;