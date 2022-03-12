import React from 'react'
import Sidebar from './components/menu/Sidebar'
import Navbar from './components/nav/Navbar'
import "./SideHub.css"
import { Outlet } from 'react-router-dom';

const SideHub = () => {
    return (
        <div className="contentDiv">
            <Sidebar />
            <div className="contentMargin">
            <Navbar />
            <Outlet />
            </div>
        </div>
    )
}

export default SideHub