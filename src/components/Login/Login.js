
import { useState } from "react";
import Header from "../Header/Header";
const Login = () => {

    const [isSignInForm, setIsSignForm] = useState(true);
    const toggleSignInForm = () => {
        setIsSignForm(!isSignInForm);
    }


    return (
        <div className="bg-black flex flex-col min-h-screen overflow-hidden relative z-0">
            <div className="bg-cover h-screen min-h-screen overflow-auto absolute w-full">
                <Header />
                <div className="h-screen">
                    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_small.jpg" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w" alt="" className="h-screen w-screen" />
                </div>
                <div className="absolute top-1/2 left-1/2 bg-black-semi-transparent rounded p-10 transform -translate-x-1/2 -translate-y-1/2 w-1/3 mt-4">
                    <form className="flex flex-col gap-y-4 ">
                        <h1 className="font-bold text-3xl text-white mb-5">{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
                        {/* <div className="relative">
                            <input type="text" id="email" placeholder=" " className="w-full bg-customGray rounded-sm border border-gray-500 border-opacity-70 leading-2 p-4 peer" />
                            <label htmlFor="email" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-gray-400">Email or Phone Number</label>
                        </div> */}

                        {!isSignInForm &&
                            <div className="relative">
                                <input type="text" id="name" placeholder=" " className="w-full bg-customGray rounded-sm border border-gray-500 border-opacity-70 leading-2 p-4 peer" />
                                <label htmlFor="name" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-400">Enter Your Name</label>
                            </div>}

                        <div className="relative">
                            <input type="text" id="email" placeholder=" " className="w-full bg-customGray rounded-sm border border-gray-500 border-opacity-70 leading-2 p-4 peer" />
                            <label htmlFor="email" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-400">Email or Phone Number</label>
                        </div>


                        {/* <input type="text" placeholder="Email or Phone Number" className="w-full bg-customGray  rounded-sm border border-gray-500 border-opacity-70 leading-2 p-4" /> */}
                        {/* <input type="text" placeholder="Password" className="w-full bg-customGray  rounded-sm border border-gray-500 border-opacity-70 leading-2 p-4" /> */}


                        <div className="relative">
                            <input type="text" id="password" placeholder=" " className="w-full bg-customGray rounded-sm border border-gray-500 border-opacity-70 leading-2 p-4 peer" />
                            <label htmlFor="password" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-400">Password</label>
                        </div>

                        <button className="w-full font-bold bg-redBtn text-white leading-2 p-3 rounded-sm text-sm">{isSignInForm ? 'Sign In' : 'Sign Up'}</button>

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