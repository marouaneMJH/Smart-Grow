import React from "react";
import { Routes, Route } from "react-router-dom";
import AnimatedCursor from "./components/UI/AnimatedCursor.jsx";
import AuthLayout from "./__Auth/AuthLayout.tsx";
import SignInForm from "./__Auth/Formes/SignInForm.jsx";
import SignUpForm from "./__Auth/Formes/SignUpForm.jsx";

function App() {
    return (
        <>
            <AnimatedCursor />
            <Routes>
                <Route path="/" element={<AuthLayout />}>
                    <Route path="sign-in" element={<SignInForm />} />
                    <Route path="sign-up" element={<SignUpForm />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
