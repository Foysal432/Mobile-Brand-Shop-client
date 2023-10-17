import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
    return (
        <div>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink className="" to="/">Home</NavLink>
                            <NavLink className="mx-5" to="/about">About</NavLink>
                            <NavLink >Gallery</NavLink>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Event King</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-2 text-2xl">
                        <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-orange-500 underline mx-5" : "mx-5"} to="/"  >Home</NavLink>
                        <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-orange-500 underline mx-5" : "mx-5"} to="/about">About</NavLink>
                        <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-orange-500 underline mx-5" : "mx-5"} to="/contact">Gallery</NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn bg-orange-500 text-white">
                        <Link to='/login'>Log in</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;