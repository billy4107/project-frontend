import "./Menu.css";
import React, { useState } from "react";

function Menu() {

    const [toggle, setToggle] = useState("side-bar");

    const buttonToggle = () => {
        if (toggle === "side-bar") {
            setToggle("side-bar-active")
        } else {
            setToggle("side-bar")
        }

    }

    return (
        <div className="wrapper">

            <div id={toggle}>

                <div className="top-side">
                    <p id="tab-menu">Tab menu</p>
                </div>

                <div>
                    <ul id="menu-list">
                        <li><i class="fa fa-dashboard" />Dashboard</li>
                        <li><i class="fa fa-calendar-check-o" />Todo List</li>
                        <li><i class="fa fa-user-circle-o" />menu3</li>
                        <li><i class="fa fa-user-circle-o" />menu4</li>
                    </ul>
                </div>

                <div className="side-footer">
                    <p><i className="fa fa-user-circle-o" />My Account</p>
                </div>

            </div>

            <div id="card-header">

                <div className="button-toggle">
                    <button type="button" id="sidebarCollapse" className="btn btn-success" onClick={buttonToggle}>

                        <span>Toggle Sidebar</span>
                    </button>
                </div>

                <div className="icon-account">
                    <i className="fa fa-user-circle-o" />
                </div>

            </div>

        </div>
    );
}

export default Menu;