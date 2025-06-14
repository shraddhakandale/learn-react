import React from "react"
import ReactDOM from 'react-dom/client'
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { CDN_URL } from "./src/utils/constants";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";

const App = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
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
            }
        ],
        errorElement: <Error/>
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <RouterProvider router={router} />
)