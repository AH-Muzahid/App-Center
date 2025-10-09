import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './../assets/logo.png'
import { FaGithub } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { IoMdAppstore } from "react-icons/io";
import { MdOutlineInstallDesktop } from "react-icons/md";
import { MdOutlineInstallMobile } from "react-icons/md"

const Navber = () => {

  return (
    <div className="navbar  lg:px-6 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box bg-white z-10 mt-3 w-52 p-2 shadow">
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-blue-500' : ''}><IoHome /> Home</NavLink></li>
            <li><NavLink to="/apps" className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-blue-500' : ''}><IoMdAppstore /> Apps</NavLink></li>
            <li><NavLink to="/installation" className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-blue-500' : ''}><MdOutlineInstallMobile /> Installation</NavLink></li>
          </ul>
        </div>

        <Link to="/" className='flex items-center gap-1'>
          <img className='w-8' src={logo} alt="" />
          <span className=" text-xl">Hero Apps</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold gap-2">
          <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-blue-500' : ''}><IoHome /> Home</NavLink></li>
          <li><NavLink to="/apps" className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-blue-500' : ''}><IoMdAppstore /> Apps</NavLink></li>
          <li><NavLink to="/installation" className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-blue-500' : ''}><MdOutlineInstallDesktop /> Installation</NavLink></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a href="https://github.com/AH-Muzahid" className="btn btn-primary w-[145px]"><FaGithub /> Contribute</a>
      </div>
    </div>
  );
};

export default Navber;