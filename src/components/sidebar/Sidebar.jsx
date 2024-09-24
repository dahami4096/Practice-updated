import React from 'react';
import { NavLink } from 'react-router-dom';  // Import NavLink from React Router
import { PiBowlSteam } from "react-icons/pi";
import { MdOutlineWaterDrop, MdElectricBolt, MdCo2 } from "react-icons/md";
import { GiOilDrum } from "react-icons/gi";
import { BsWind } from "react-icons/bs";
import { GiGlassBall } from "react-icons/gi";
import { HiTrendingUp } from "react-icons/hi";
import { VscGraph } from "react-icons/vsc";
import './sidebar.css';
import logo from '../../assets/logo.png';

const Sidebar = () => {
    return (
        <div className='menu'>
            <div className='logo'>
                <img
                    src={logo}
                    alt="Logo"
                    width="34"
                    height="50"
                    padding="2px"
                    className="d-inline-block align-text-top"
                />
                Lion Brewery 
                <p>(Pvt.) Ltd.</p>
            </div>

            <div className="menu--list">
                <NavLink
                    to='/steam'  // Use 'to' instead of 'href'
                    className={({ isActive }) => isActive ? 'item active' : 'item'}  // Automatically handles 'active' class
                >
                    <PiBowlSteam className='icon' />
                    Steam
                </NavLink>

                <NavLink
                    to='/water'
                    className={({ isActive }) => isActive ? 'item active' : 'item'}
                >
                    <MdOutlineWaterDrop className='icon' />
                    Water
                </NavLink>

                <NavLink
                    to='/fuel'
                    className={({ isActive }) => isActive ? 'item active' : 'item'}
                >
                    <GiOilDrum className='icon' />
                    Fuel
                </NavLink>

                <NavLink
                    to='/comair'
                    className={({ isActive }) => isActive ? 'item active' : 'item'}
                >
                    <BsWind className='icon' />
                    Com Air
                </NavLink>

                <NavLink
                    to='/co2'
                    className={({ isActive }) => isActive ? 'item active' : 'item'}
                >
                    <GiGlassBall className='icon' />
                    CO2
                </NavLink>

                <NavLink
                    to='/steamtrend'
                    className={({ isActive }) => isActive ? 'item active' : 'item'}
                >
                    <HiTrendingUp className='icon' />
                    Steam Trend
                </NavLink>

                <NavLink
                    to='/elec'
                    className={({ isActive }) => isActive ? 'item active' : 'item'}
                >
                    <MdElectricBolt className='icon' />
                    Electricity
                </NavLink>

                <NavLink
                    to='/kpi'
                    className={({ isActive }) => isActive ? 'item active' : 'item'}
                >
                    <VscGraph className='icon' />
                    KPI
                </NavLink>
            </div>
        </div>
    );
}

export default Sidebar;
