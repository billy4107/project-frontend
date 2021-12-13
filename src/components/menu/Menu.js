import "./Menu.css"
import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "../../data/SidebarData";
import {
    // Menu,
    MenuItem,
    ProSidebar,
    SidebarHeader,
    SubMenu
  } from "react-pro-sidebar";

function Menu() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div className={sidebar ? 'side-bar-active' : 'side-bar'}>

                <ul className='nav-menu-items' >
                    <li className='navbar-toggle' onClick={showSidebar}>
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>

        </>
    );
}

export default Menu;


//   <ul className='nav-menu-items' onClick={showSidebar}>
//                         <li className='navbar-toggle'>
//                             <Link to='#' className='menu-bars'>
//                                 <AiIcons.AiOutlineClose />
//                             </Link>
//                         </li>
//                         {SidebarData.map((item, index) => {
//                             return (
//                                 <li key={index} className={item.cName}>
//                                     <Link to={item.path}>
//                                         {item.icon}
//                                         <span>{item.title}</span>
//                                     </Link>
//                                 </li>
//                             );
//                         })}
//                     </ul>