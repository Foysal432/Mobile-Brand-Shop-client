import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";
import { Toaster } from "react-hot-toast";

const Layout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Toaster/>
        </div>
    );
};

export default Layout;