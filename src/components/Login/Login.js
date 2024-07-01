
import { useState, useRef } from "react";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from "../Header/Header";
import { checkValidData } from "../../utils/validate";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/userSlice";


const Login = () => {
    const dispatch = useDispatch();
    const [isSignInForm, setIsSignForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);


    const toggleSignInForm = () => {
        setIsSignForm(!isSignInForm);
    }

    const handleBtnClick = () => {
        // validate the form data

        const message = checkValidData(name?.current?.value, email?.current?.value, password?.current?.value);
        setErrorMessage(message);
        if (message) return;
        if (!isSignInForm) {
            createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    toast.success('SignUp Successful!!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Bounce,
                    });
                    updateProfile(user, {
                        displayName: name?.current?.value
                    }).then(() => {
                        console.log('Name updated successfully');
                        const { uid, email, displayName } = auth?.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));

                    }).catch((error) => {
                        console.log('Name updation failed::', error);
                    })

                })
                .catch((error) => {
                    console.log(`Error occured ${error}`);
                    // const errorCode = error.code;
                    // const errorMessage = error.message;
                    toast.error(error?.message, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Bounce,
                    });
                });

        } else {
            // signin logic
            signInWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
                .then((userCredential) => {
                    // Signed in 
                    // const user = userCredential.user;
                    toast.success('Login Successful!!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Bounce,
                    });

                })
                .catch((error) => {
                    // const errorCode = error.code;
                    toast.error(error?.message, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Bounce,
                    });
                });
        }
    }


    return (
        <div className="bg-black flex flex-col min-h-screen overflow-hidden relative z-0">
            <div className="bg-cover h-screen min-h-screen overflow-auto absolute w-full">
                <Header />
                <ToastContainer />
                <div className="h-screen">
                    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_small.jpg" srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w" alt="banner-img" className="h-screen w-screen" />
                </div>
                <div className="absolute top-1/2 left-1/2 bg-black-semi-transparent rounded p-10 transform -translate-x-1/2 -translate-y-1/2 w-1/3 mt-4">
                    <form autoComplete="off" className="flex flex-col gap-y-4 " onSubmit={(e) => {
                        e.preventDefault();
                    }}>
                        <h1 className="font-bold text-3xl text-white mb-5">{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
                        {/* <div className="relative">
                            <input type="text" id="email" placeholder=" " className="w-full bg-customGray rounded-sm border border-gray-500 border-opacity-70 leading-2 p-4 peer" />
                            <label htmlFor="email" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-gray-400">Email or Phone Number</label>
                        </div> */}

                        {!isSignInForm &&
                            <div className="relative">
                                <input type="text" id="name" ref={name} placeholder=" " className="w-full bg-customGray rounded-sm border border-gray-500 border-opacity-70 leading-2 p-4 peer text-white" required autoComplete="false" autoSave="false" />
                                <label htmlFor="name" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-400" autoComplete="false">Enter Your Name</label>
                            </div>}

                        <div className="relative">
                            <input type="text" id="email" placeholder=" " className="w-full bg-customGray rounded-sm border border-gray-500 border-opacity-70 leading-2 p-4 peer text-white" ref={email} required />
                            <label htmlFor="email" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-400">Email or Phone Number</label>
                        </div>


                        {/* <input type="text" placeholder="Email or Phone Number" className="w-full bg-customGray  rounded-sm border border-gray-500 border-opacity-70 leading-2 p-4" /> */}
                        {/* <input type="text" placeholder="Password" className="w-full bg-customGray  rounded-sm border border-gray-500 border-opacity-70 leading-2 p-4" /> */}


                        <div className="relative">
                            <input type="password" id="password" placeholder=" " className="w-full bg-customGray rounded-sm border border-gray-500 border-opacity-70 leading-2 p-4 peer text-white" ref={password} required />
                            <label htmlFor="password" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-400">Password</label>
                        </div>

                        {errorMessage?.length > 0 && <p className="text-red-600 py-1 font-bold">{errorMessage}</p>}

                        <button className="w-full font-bold bg-redBtn text-white leading-2 p-3 rounded-sm text-sm" onClick={handleBtnClick}>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>

                        {/* <p className="w-full text-white text-center">OR</p>

                        <button className="w-full font-bold bg-transparent bg-customGray2 text-white leading-2 p-3 rounded-sm text-sm">Use a Sign-In Code</button>

                        <a href="/" className="w-full text-white text-center">Forgot Password?</a>

                        <div class="flex items-center w-full">
                            <input id="remember-me" type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" />
                            <label for="remember-me" class="ml-2 text-white">Remember me</label>
                        </div> */}

                        {isSignInForm && <p className="text-white w-full">New to Netflix?&nbsp;<span className="text-white font-bold cursor-pointer" onClick={toggleSignInForm}>Sign up now.</span></p>}

                        {!isSignInForm && <p className="text-white w-full">Already registered?&nbsp;<span className="text-white font-bold cursor-pointer" onClick={toggleSignInForm}>Sign In now.</span></p>}

                    </form>
                </div>

            </div>
        </div>
    )
}

export default Login;