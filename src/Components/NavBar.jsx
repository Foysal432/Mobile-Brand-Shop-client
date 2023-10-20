import {  useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../assets/AuthProvider";
import Swal from "sweetalert2";
const NavBar = () => {
    const {user,logout}=useContext(AuthContext)
    const email =user && user.email;
    const handlelogout =()=>{
        logout()
        .then(
            Swal.fire(
                'Good!',
                'You Sining out successfull',
                'success'
              )
        )
        .catch()
    }
    return (
        <div>
            <div className="navbar bg-slate-300 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink className="" to="/">Home</NavLink>
                            <NavLink className="mx-5" to="/addproduct">Add Product</NavLink>
                            <Link >My Cart</Link>
                        </ul>
                    </div>
                 <img src="https://i.ibb.co/2sYRLtr/logo.webp" alt="" />
                 <h1 className="text-orange-400 font-bold">Shop</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-2 text-2xl">
                        <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-orange-500 underline mx-5 btn" : "mx-5 font-bold btn"} to="/" >Home</NavLink>
                        <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-orange-500 underline mx-5 btn" : "mx-5 font-bold btn"} to="/addproduct"> Add Product</NavLink>
                        <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-orange-500 underline mx-5 btn" : "mx-5 font-bold btn"} to={`/mycart/${email}`}>My Cart</NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                {
                    user ? <> 
                  
                    <p>{user.displayName}</p> 
                    <img className="w-8 mx-4 rounded-lg" src={user.photoURL} alt="" /> 
                    <button onClick={handlelogout} className="btn bg-orange-500 text-white">
                   Log Out
                    </button>
                    </>  
                    : 
                    <button className="btn bg-orange-500 text-white">
                    <Link to='/login'>Log in</Link>
                        </button>
                }
                </div>
            </div>
        </div>
    );
};

export default NavBar;