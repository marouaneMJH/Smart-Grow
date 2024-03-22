import React from "react";
import { Outlet } from "react-router-dom";
import { AnimatedBackground } from "./Formes/FormsStyle";

const AuthLayout = () => {
    return (
        <AnimatedBackground>
            <Outlet />
        </AnimatedBackground>
    );
};

export default AuthLayout;

// style={{

//     // backgroundImage:
//     //     'url("https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg")',
//     // backgroundSize: "cover",
// }}
