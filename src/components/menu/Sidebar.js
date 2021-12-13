import "./Sidebar.css"
import { AiOutlineMenu } from "react-icons/ai";
import { GiMushroomGills } from "react-icons/gi";
import { FaGem, FaHeart } from "react-icons/fa";
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
                    <MenuItem icon={<FaGem />}>
                        Dashboard
                        <Link to="/" />
                    </MenuItem>

                    <MenuItem icon={<FaGem />}>
                        Workplace
                        <Link to="/pageworkplace" />
                    </MenuItem>

                    <MenuItem icon={<FaGem />}>
                        Process
                        <Link to="/pageprocess/dried" />
                    </MenuItem>

                    <MenuItem icon={<FaGem />}>
                        Warehouse
                        <Link to="/pagewarehouse/warehouse" />
                    </MenuItem>
                </Menu>
            </ProSidebar>
        </div>
    );
}

export default Sidebar;

{/* <SubMenu title="Reports" icon={<FaHeart />}>
            <MenuItem>Track Report</MenuItem>
            <MenuItem>Inventory Report</MenuItem>
            <MenuItem>Customer Report</MenuItem>
          </SubMenu> */}