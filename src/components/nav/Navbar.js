import { FaUserCircle } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
    return (
        <div id="Navbar">
            <div className="status">
            <p id="name">นายabcdefgs lijkmnop</p>
            <p><FaUserCircle /></p>
            </div>
        </div>
    );
}

export default Navbar;