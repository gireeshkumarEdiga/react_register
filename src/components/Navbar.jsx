import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div style={{display:"flex", flexDirection:"row"}}>
            <Link style={{margin:"20PX"}} to="/">DASHBOARD</Link>
            <Link style={{margin:"20PX"}} to="/one">ONE</Link>
            <Link style={{margin:"20PX"}} to="/two">TWO</Link>
        </div>
    )
}