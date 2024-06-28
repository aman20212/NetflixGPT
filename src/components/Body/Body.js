import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../../utils/firebase";

import Browse from "../Browse/Browse";
import Error from "../Error/Error";
import Login from "../Login/Login";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../../utils/userSlice";

const Body = () => {
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        },
        {
            path: '/browse',
            element: <Browse />
        },
        {
            path: '/error',
            element: <Error />
        }
    ]);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
            } else {
                dispatch(removeUser());
            }
        })

    }, [])


    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body;