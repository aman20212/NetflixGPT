
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../../utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { addUser, removeUser } from "../../utils/userSlice";
import { LOGO, USER_AVATAR } from "../../utils/constants";


const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userInfo = useSelector((state) => state?.user);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            toast.success('Signout Successful !!!', {
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
            navigate("/");
        }).catch((error) => {
            toast.error('Signout Failed !!!', {
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
            navigate('/error');
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                navigate('/browse');
            } else {
                dispatch(removeUser());
                navigate('/');
            }
        });
        // unsubscribe will be called when component unmounts
        return (() => {
            unsubscribe();
        });

    }, [])


    return (
        <header className="absolute bg-gradient-to-b from-black z-10 w-screen flex justify-between">
            {/* <ToastContainer /> */}
            <div><img src={LOGO} alt="Netflix Logo"
                className="w-44"
            /></div>
            <ToastContainer />
            {/* <div className="flex flex-col p-2">
                <img src="https://occ-0-2590-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" alt="user-icon" className="w-12 h-12 rounded" />
                <div className="">Sign out of Netflix</div>
            </div> */}

            {userInfo && <div className="flex flex-col p-4 mr-4 group">
                <img src={USER_AVATAR} alt="user-icon" className="w-12 h-12 rounded cursor-pointer" />


                <div className="absolute right-2 mt-14 w-auto bg-gray-800 rounded-sm shadow-lg py-2 hidden group-hover:block">
                    <button onClick={handleSignOut} className="block px-4 py-2 text-sm text-gray-200 cursor-pointer hover:bg-gray-700">Sign out of Netflix</button>
                </div>
            </div>}
        </header>
    )
}

export default Header;