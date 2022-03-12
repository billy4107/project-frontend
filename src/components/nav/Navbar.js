import axios from "axios";
import "./Navbar.css";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const axiosJWT = axios.create();

    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:3001/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    const getUsers = async () => {
        const response = await axiosJWT.get('http://localhost:3001/users', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setUsers(response.data);
    }

    const Logout = async () => {
        try {
            await axios.delete('http://localhost:3001/logout');
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div id="Navbar">
            <div className="status">
                <div className="statusright">
                    <p id="name"><FaUserCircle /> {name}</p>
                </div>
                <div className="statusleft">
                    <button onClick={Logout} className="btn btn-dark">
                        Log Out
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;