"use client";

import {
    FaBars,
    FaTimes
  } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { ReactNode, useState } from 'react';

interface NavItem{
    id:string;
    name:string;
}

const navItems:NavItem[]=[
    {id:'home',name:'Home'},
    {id:'about',name:'About'},
    {id:'skills',name:'Skills'},
    {id:'projects',name:'Projects'},
    {id:'contact',name:'Contact'},
]

const Navbar = () => {
    const [nav, setNav] = useState<boolean>(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='fixed w-full h-[80px] flex justify-center items-center px-4 bg-cyan-950 text-gray-300'>
        <div className='hidden md:flex gap-x-20'>
            {navItems.map((item,index):ReactNode=>{
                const {id,name} = item;
                return (
                    <Link to={id} smooth={true} spy={true} duration={500} key={index} className='hover:text-white hover:font-semibold hover:cursor-pointer'>
                        {name}
                    </Link>
                )
            })}
        </div>
        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* Mobile menu */}
        <ul
            className={
            !nav
                ? 'hidden'
                : 'absolute top-0 left-0 w-full h-screen bg-cyan-950 flex flex-col justify-center items-center'
            }
        >
            {navItems.map((item,index):ReactNode=>{
                const {id,name} = item;
                return (
                    <li className='py-6 text-4xl' key={index}>
                        <Link onClick={handleClick} to={id} smooth={true} duration={500}>
                            {name}
                        </Link>
                    </li>
                )
            })}
        </ul>


        </div>
  );
}

export default Navbar