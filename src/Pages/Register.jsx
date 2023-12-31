import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../assets/AuthProvider";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";

const Register = () => {
const {createuser}  =useContext(AuthContext)
    const handleRegister = e =>{
        e.preventDefault();
        const email =e.target.email.value;
        const name=e.target.name.value;
        const image=e.target.image.value;
        const password=e.target.password.value;
        console.log(name,email,password,image);
        // password more than 6
if (password.length < 6) {
  return toast.error('your password must be up to 6 character')
       }
          //    uppercase validate
        else if (!/[A-Z]/.test(password)){
            return  Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Your Password Must be one UPPERCASE',
              
              })
        }
    // lower case 
    else if (!/[a-z]/.test(password)){
        return  Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Your Password Must be one lowercase',
          
          })
    }
    // at list one digit
    else if (!/[0-9]/.test(password)){
        return  Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Your Password Must be one Digit',
         
          })
    }
    // A Special Character
    else if (!/[>>@//!#$%&?*<<]/.test(password)){
        return  Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Your Password Must be One SpecialCharacter',
          
          })
    }
    // update and create user

createuser(email,password)
.then(result=>{
    console.log(result.user);
    Swal.fire(
        'Good job!',
        'You Registation success ',
        'success'
      )
    //   update profile
    updateProfile(result.user,{
        displayName:name,
        photoURL:image
    })
    .then()
    .catch()
    window.location.reload()
})
.catch(error=>{
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
        <div className="w-full max-w-sm mx-auto bg-gray-300 p-4 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form onSubmit={handleRegister} className="space-y-6" action="#">
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">Please registration in Here</h5>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                    <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Your Name" required />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image URL</label>
                    <input type="text" name="image" id="LastName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="URL" required />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input type="text" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                </div>

                <div className="flex items-start">
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                        </div>
                        <label className="ml-2  text-sm font-medium text-red-400 dark:text-gray-300">Remember me</label>
                    </div>
                    <a href="#" className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                </div>
                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
            </form>
            <div className="w-full">
                <p className="mt-2">Already Have an account? <Link className="text-yellow-800 hover:underline" to='/login'>Login</Link> </p>
            </div>
        </div>
    );
};

export default Register;