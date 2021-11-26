import "./Dashboard.css";
import Menu from "./Menu";

function Dashboard() {
    return (
        <div className="card-bg">
            <div className="side-bar">
                <Menu />
            </div>
            <div className="card-content">
                <p>Dashboard</p>
            </div>
        </div>
    );
}

export default Dashboard;