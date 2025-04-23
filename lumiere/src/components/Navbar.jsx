import React from "react";
import logo from '../assets/logo.svg'
import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <>
            <div className="flex items-center justify-between py-5 font-medium">
                <img src={logo} className="w-auto h-20" alt="logo" />

                <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
                    <NavLink to='/' className="flex flex-col items-center gap-1">
                        <p>HOME</p>
                        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700"/>
                    </NavLink>
                    <NavLink to='/Collection' className="flex flex-col items-center gap-1">
                        <p>COLLECTIONS</p>
                        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700"/>
                    </NavLink>
                    <NavLink to='/About' className="flex flex-col items-center gap-1">
                        <p>ABOUT</p>
                        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700"/>
                    </NavLink>
                    <NavLink to='/Contact' className="flex flex-col items-center gap-1">
                        <p>CONTACT</p>
                        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700"/>
                    </NavLink>
                </ul>
            </div>
        </>
    );
}

export default Navbar;