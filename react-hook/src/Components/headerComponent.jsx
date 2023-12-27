import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [activeLink, setActiveLink] = useState(null);

    // Tailwind CSS classes
    const navLinkStyle = "block float-left text-white text-center py-2 px-4 text-base no-underline hover:bg-gray-300 hover:text-black";
    const activeLinkStyle = "bg-green-500 text-black";

    // Function to handle link click
    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div className="bg-black overflow-hidden">
            <NavLink
                to="/"
                className={`${navLinkStyle} ${activeLink === "/" ? activeLinkStyle : ""}`}
                onClick={() => handleLinkClick("/")}
            >
                Home
            </NavLink>
            <NavLink
                to="/table"
                className={`${navLinkStyle} ${activeLink === "/table" ? activeLinkStyle : ""}`}
                onClick={() => handleLinkClick("/table")}
            >
                Table
            </NavLink>
            <NavLink
                to="/blog"
                className={`${navLinkStyle} ${activeLink === "/blog" ? activeLinkStyle : ""}`}
                onClick={() => handleLinkClick("/blog")}
            >
                Blog
            </NavLink>
            <NavLink
                to="/count"
                className={`${navLinkStyle} ${activeLink === "/count" ? activeLinkStyle : ""}`}
                onClick={() => handleLinkClick("/count")}
            >
                Count
            </NavLink>
        </div>
    );
};

export default Navbar;
