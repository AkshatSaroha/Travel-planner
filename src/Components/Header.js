import React from "react";
import '../Styles/header.css';

function Header(){
    return(
            <div className="navbar">
                <ul>
                    
                    <li><a href="#videoss">Home</a></li>
                    <li><a href="#destinations">Destination</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#footer">Contact</a></li>
                </ul>
            </div>
    );
}

export default Header;

