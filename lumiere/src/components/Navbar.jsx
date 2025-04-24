import React, { useState } from "react";
import {assets} from '../assets/assets'
import { Link, NavLink } from "react-router-dom";


function Navbar(){
    const [visible, setVisible] = useState(false);

    return(
        <>
            <div className="flex items-center justify-between py-5 font-medium">
                <img src={assets.logo} className="w-auto h-20" alt="logo" />

                <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
                    <NavLink to='/' className="flex flex-col items-center gap-1">
                        <p>HOME</p>
                        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"/>
                    </NavLink>
                    <NavLink to='/Collection' className="flex flex-col items-center gap-1">
                        <p>COLLECTIONS</p>
                        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                    </NavLink>
                    <NavLink to='/About' className="flex flex-col items-center gap-1">
                        <p>ABOUT</p>
                        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"/>
                    </NavLink>
                    <NavLink to='/Contact' className="flex flex-col items-center gap-1">
                        <p>CONTACT</p>
                        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"/>
                    </NavLink>
                </ul>

                <div className="flex items-center gap-6">
                    <i className="fa-solid fa-magnifying-glass w-5 cursor-pointer" style={{color: '#000000'}}></i>

                    <div className="group relative">
                        <i className="fa-solid fa-user w-5 cursor-pointer"></i>
                        <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                            <div className="flex flex-col gap-2 w-36 px-5 bg-slate-100 text-gray-500 rounded">
                                <p className="cursor-pointer hover:text-black">My Profile</p>
                                <p className="cursor-pointer hover:text-black">Orders</p>
                                <p className="cursor-pointer hover:text-black">Log Out</p>
                            </div>
                        </div>
                    </div>
                    <Link to='/Cart' className="relative">
                        <i className="fa-solid fa-cart-shopping w-5 min-w-5"></i>
                        <p className="absolute right-[-5px] botto-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">10</p>
                    </Link>
                    <i onClick={() => setVisible(true)} className="w-5 cursor-pointer sm:hidden fa-solid fa-bars"></i>

                </div>

                {/*Sidebar*/}
                <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                    <div className="flex flex-col text-gray-600">
                        <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
                            <i className="fa-solid fa-arrow-left h-4"></i>
                            <p>Back</p>
                        </div>
                        <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
                        <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/Collections'>COLLECTIONS</NavLink>
                        <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/About'>ABOUT</NavLink>
                        <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/Contact'>CONTACT</NavLink>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Navbar;