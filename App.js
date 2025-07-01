import React, { lazy, Suspense, useEffect, useState } from "react"
import ReactDOM from 'react-dom/client'
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { CDN_URL } from "./src/utils/constants";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import userContext from "./src/utils/userContext";
// import Grocery from "./src/components/Grocery";

const Grocery = lazy(()=>import("./src/components/Grocery"));

const App = () => {
    const [userName, setUserName] = useState();
    useEffect(()=>{
        const data = {
            "userName": "Shraddha Kandale"
        }
        setUserName(data.userName);
    },[])
    return (
        <userContext.Provider value={{loggedInUser: userName, setUserName}}>
        <div className="flex flex-col justify-center bg-orange-50">
            <Header />
            <Outlet />
        </div>
        </userContext.Provider>
    )
}

const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path:"/about",
                element: <About/>
            },
            {
                path:"/contact",
                element: <Contact/>
            },
            {
                path:"/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
            },
            {
                path:"/restaurants/:resId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error/>
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <RouterProvider router={router} />
)