import React from 'react'
import { githubLogo, googleLogo } from '../assets';
import {
    GoogleAuthProvider,
    getAuth,
    signOut,
    signInWithPopup,
} from "firebase/auth";
import {ToastContainer, toast } from "react-toastify";
import { Provider, useDispatch } from 'react-redux';
import { addUser, removeUser } from '../Redux/figSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
   const handleGoogleLogin = () =>{
    signInWithPopup(auth,provider).then((result) => {
        const user = result.user;
        dispatch(addUser({
            _id:user.uid,
            name: user.displayName,
            email:user.email,
            image:user.photoURL,
        }));
        setTimeout(() => {
            navigate("/")

        },1500);
    })
   .catch((error) => {
    console.log(error);
   });
        
    };
    const handleSignOut = () =>{
        signOut(auth).then (() => {
            toast.success("log out successfully");
            dispatch(removeUser());
        })
        .catch((error) => {
            console.log(error);
        });
    }
  return (
    <div className='w-full flex flex-col items-center justify-center gap-10 py-20'>
        <div className='w-full flex items-center justify-center gap-10'>
           <div onClick={handleGoogleLogin} className='text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300'>
                <img className='w-8' src={googleLogo} alt="googlelogo">
                </img>
                <span className='text-sm text-gray-900'>Sign in with Google</span>
           </div>
           <button onClick={handleSignOut} className='bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300'>sign out</button>
        </div>
        <div className='w-full flex items-center justify-center gap-10'>
           <div className='text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300'>
                <img className='w-8' src={githubLogo} alt="googlelogo">
                </img>
                <span className='text-sm text-gray-900'>Sign in with github</span>
           </div>
           <button className='bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300'>sign out</button>
        </div>
        <ToastContainer 
        position = "top-left"
        autoClose = {2000}
        hideProgressBar = {false}
        newestOnTop = {false}
        closeOnclick
        trl = {false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"/>
    </div>
  )
}

export default Login;
 