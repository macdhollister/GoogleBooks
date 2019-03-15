import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                    <img src="https://blog.hubspot.com/hubfs/image8-2.jpg" alt="Google Logo" />
                </Link>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link className="navbar-item" to="/">Home</Link>
                    <Link className="navbar-item" to="/saved">Saved</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;