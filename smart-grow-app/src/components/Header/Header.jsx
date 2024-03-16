import React from "react";
import "./Header.css";
function Header() {
    return (
        <header className="header">
            <span>Grow</span>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Login</li>
            </ul>
        </header>
    );
}

export default Header;
