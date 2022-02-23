import "./Sidebar.css"
import { AiOutlineMenu } from "react-icons/ai";
import { GiMushroomGills } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";
import { RiTodoLine } from "react-icons/ri";
import { VscServerProcess } from "react-icons/vsc";
import { FaWarehouse } from "react-icons/fa";
import { GiGrassMushroom } from "react-icons/gi";
import { MdAddShoppingCart } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { MdSell } from "react-icons/md";
import "react-pro-sidebar/dist/css/styles.css";
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {
    Menu,
    MenuItem,
    ProSidebar,
    SidebarHeader,
    SubMenu
} from "react-pro-sidebar";

function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);

    // added styles
    const styles = {
        menuIcon: {
            float: "right",
            margin: "10px"
        }
    };

    const onClickMenuIcon = () => {
        setCollapsed(!collapsed);
    };

    // const screenWidth = () => {
    //     let screens = window.innerWidth()
    //     if (screens === 500) {
    //         setCollapsed(true)
    //     }
    // }
    return (
        <div id="Side">
            <ProSidebar className="sideBarHeight" collapsed={collapsed}>
                <SidebarHeader>
                    <div style={styles.menuIcon} onClick={onClickMenuIcon}>
                        <AiOutlineMenu />
                    </div>
                    <div className="headname">
                        <h3><GiMushroomGills /> {collapsed ? "" : "GOLDEN FARM"}</h3>
                    </div>
                </SidebarHeader>
                <Menu iconShape="square">
                    <MenuItem icon={<MdDashboard />}>
                        Dashboard
                        <Link to="/" />
                    </MenuItem>

                    <MenuItem icon={<RiTodoLine />}>
                        Workplace
                        <Link to="/pageworkplace" />
                    </MenuItem>

                    <MenuItem icon={<VscServerProcess />}>
                        Process
                        <Link to="/pageprocess/sorting" />
                    </MenuItem>

                    <SubMenu title="Fresh mushrooms" icon={<GiGrassMushroom />}>
                        <MenuItem>
                            Add Product
                            <Link to="/pagewarehouse/fresh/addproduct" />
                        </MenuItem>
                        <MenuItem
                        >Manage Product
                            <Link to="/pagewarehouse/fresh/manageproduct" />
                        </MenuItem>
                    </SubMenu>

                    <MenuItem icon={<FaWarehouse />}>
                        Warehouse
                        <Link to="/warehouse" />
                    </MenuItem>

                    <SubMenu title="Purchase" icon={<MdAddShoppingCart />}>
                        <MenuItem>
                            Manage member
                            <Link to="/member" />
                        </MenuItem>
                        <MenuItem>
                            Manage purchase
                            <Link to="/buymushroom" />
                        </MenuItem>
                    </SubMenu>

                    <SubMenu title="Sells" icon={<MdSell />}>
                        <MenuItem>
                            Manage partner
                            <Link to="/partner" />
                        </MenuItem>
                        <MenuItem>
                            Manage sells
                            <Link to="/sellmushroom" />
                        </MenuItem>
                    </SubMenu>

                    <MenuItem icon={<BsFillPersonLinesFill />}>
                        Personnel
                        <Link to="/personnel" />
                    </MenuItem>
                </Menu>
            </ProSidebar>
        </div>
    );
}

export default Sidebar;
