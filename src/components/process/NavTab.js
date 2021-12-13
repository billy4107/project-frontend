import "./NavTab.css";
import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

function NavTab() {



    return (
        <div className="nav nav-tabs">
            <Link to="/pageprocess/dried" className='text-link'>
            <div className="nav-item">
                <button className="nav-link active">Drying</button>
            </div>
            </Link>

            <Link to="/pageprocess/packing" className='text-link'>
            <div className="nav-item">
                <button className="nav-link active">Packing</button>
            </div>
            </Link>

            <Link to="/pageprocess/weigh" className='text-link'>
            <div className="nav-item">
                <p className="nav-link active" >Weigh</p>
            </div>
            </Link>

            <Link to="/pageprocess/printing" className='text-link'>
            <div className="nav-item" >
                <p className="nav-link active" >Printing</p>
            </div>
            </Link>

        </div>


    );
}

export default NavTab;