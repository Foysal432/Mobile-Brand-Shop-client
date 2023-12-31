import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../assets/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { googleSingin, singinemail } = useContext(AuthContext)
  const location =useLocation()
  const navigate =useNavigate()
  // for google
  const handleGoogle = () => {
    googleSingin()
      .then(result => {
        {
      navigate(location?.state? location.state :'/')
        }
        Swal.fire(
          'Good job!',
          'You SuccessFully Login!',
          'success'
        )
        console.log(result.user);
      })
      .catch(error => {
        console.error(error);
      })

  }
  // log in email and password
  const handlelogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    if (password.length < 6) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong Your password must be 6 character!',
        footer: '<a href="">Why do I have this issue?</a>'
      })

    }
    //    uppercase validate
    else if (!/[A-Z]/.test(password)) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Your Password Must be one UPPERCASE',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    }
    // lower case 
    else if (!/[a-z]/.test(password)) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Your Password Must be one lowercase',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    }
    // at list one digit
    else if (!/[0-9]/.test(password)) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Your Password Must be one Digit',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    }
    // A Special Character
    else if (!/[>>@//!#$%&?*<<]/.test(password)) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Your Password Must be One SpecialCharacter',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    }
    // sing in with email and password
    singinemail(email, password)
      .then(result => {
        // navigate
        {
          navigate(location?.state? location.state :'/')
            }
        Swal.fire({
          title: 'Your Login SuccessFull',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
        console.log(result.user);

      })
      .catch(error => {
        console.error(error);
        return Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: (error.message),
          footer: '<a href="">Why do I have this issue?</a>'
        })
      })
  }
  return (
    <div className="bg-gray-50 min-h-screen  flex items-center justify-center">
      {/* login container */}
      <div className="bg-gray-100 mt-2 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        {/* form */}
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-4xl text-[#002D74]">Login</h2>
          <p className="text-xs mt-4 text-[#002D74]">If you are already a member, easily log in</p>

          <form onSubmit={handlelogin} action="" className="flex flex-col gap-4">

            <div className="mt-8 w-full ">
              <p className="text-2xl font-bold">Email</p>
              <input className="p-2 rounded-xl border w-full" type="email" name="email" placeholder="Email" />
            </div>
            <div className="relative">
              <p className="text-2xl font-bold">Password</p>
              <input className="p-2 rounded-xl border w-full" type="password" name="password" placeholder="Password" />
            </div>
            {/* <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">Login</button> */}
            <input className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300" type="submit" value="Login" />
          </form>

          <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>

          <button onClick={handleGoogle} className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
            <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
              <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
              <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
            </svg>
            Login with Google
          </button>

          <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
            <a href="#">Forgot your password?</a>
          </div>

          <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
            <p>Don't have an account?</p>
            <Link to='/register'>
              <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Register</button>
            </Link>
          </div>
        </div>

        {/* img */}
        <div className="md:block hidden w-1/2">
          <img className="rounded-2xl " src="https://images.unsplash.com/photo-1616606103915-dea7be788566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" />
        </div>
      </div>
    </div>
  );
};

export default Login;