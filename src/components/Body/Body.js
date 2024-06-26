import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import Browse from "../Browse/Browse";
import Error from "../Error/Error";
import Login from "../Login/Login";

const Body = () => {

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




    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body;