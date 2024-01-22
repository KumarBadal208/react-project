import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./header";
import Body from "./body";
import ABoutClass from "./about";
import Contact from "./contact";
import Error from "./error";
import RestaurantMenu from "./restaurantMenu";

const AppLayout = ()=>{
    return (
        <div>
            <Header />
            <Outlet/>
        </div>
    )
}

const route = createBrowserRouter([
    {
        path : "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <ABoutClass/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu/>
            }
        ],
        errorElement: <Error/>
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={route} />);