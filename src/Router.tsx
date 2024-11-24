import { createBrowserRouter } from "react-router-dom";
import GuestLayout from "./components/GuestLayout";
import NotFound from "./views/NotFound";

const Router = createBrowserRouter([
    // {
    //     path: "/",
    //     element: <DefaultLayout />,
    //     children: [
    //         {
    //             path:"/",
    //             element: <Navigate to="/user" />  
    //         },
    //         {
    //             path: "/user",
    //             element: <User />
    //         }
    //     ],
    // },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/login",
            },
            {
                path: "/register",
            }
        ]
    },
    {
        path: "/*",
        element: <NotFound />
    }
]);

export default Router;