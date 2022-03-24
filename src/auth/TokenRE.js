import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import axios from "axios";

export const TokenRE = () => {
    
        const [, setName] = useState('');
        const [, setToken] = useState('');
        const [, setExpire] = useState('');
        const navigate = useNavigate();

        useEffect(() => {
            refreshToken();
        }, []);
    
        const refreshToken = async () => {
            try {
                const response = await axios.get('http://localhost:3001/token');
                setToken(response.data.accessToken);
                const decoded = jwt_decode(response.data.accessToken);
                setName(decoded.name);
                setExpire(decoded.exp);
            } catch (error) {
                if (error.response) {
                    navigate("/");
                }
            }
        }
}
