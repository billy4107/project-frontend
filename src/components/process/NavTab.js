import "./NavTab.css";
import React from "react";
import { Link } from "react-router-dom";

function NavTab() {



    return (
        <div className="nav nav-tabs">

            <Link to="/pageprocess/sorting" className='text-link'>
                <div className="nav-item">
                    <button className="nav-link active">Sorting</button>
                </div>
            </Link>

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

            <Link to="/pageprocess/confirmform" className='text-link'>
                <div className="nav-item" >
                    <p className="nav-link active" >Confirm</p>
                </div>
            </Link>

        </div>


    );
}

export default NavTab;