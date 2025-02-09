import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function BottomNav() {
    return(
        <div className="bottom-nav">
            <a href="https://github.com/YOUR_GITHUB" target="_blank" rel="noopener noreferrer" className="nav-item">
                <FaGithub className="icon" />
            </a>

            <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noopener noreferrer" className="nav-item">
                <FaLinkedin className="icon" />
            </a>
        </div>
    )
};
export default BottomNav;