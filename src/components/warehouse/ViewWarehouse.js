import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./ViewWarehouse.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";

const ViewWarehouse = () => {
    const { wareid } = useParams();

    const [mushroomname, setMushroomname] = useState('');
    const [quantity, setQuantity] = useState('');
    const [netweight, setNetweight] = useState('');
    const [code, setCode] = useState('');
    const [createdAt, setCreatedAt] = useState(new Date());
    const [updatedAt, setUpdatedAt] = useState(new Date());

    const [, setName] = useState('');
    const [, setToken] = useState('');
    const [, setExpire] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        refreshToken();
    });

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

    const getWarehouseById = async (wareid) => {
        const response = await axios.get(`http://localhost:3001/warehouse/${wareid}`);
        console.log(response);
        setMushroomname(response.data.mushroomname);
        setQuantity(response.data.quantity);
        setNetweight(response.data.netweight);
        setCode(response.data.code);
        setCreatedAt(response.data.createdAt);
        setUpdatedAt(response.data.updatedAt);
    };

    useEffect(() => {
        if (wareid) {
            getWarehouseById(wareid);
        }
    }, [wareid])
    return (
        <div>
            <div className="name-page">
                <p>View Warehouse</p>
            </div>

            <form className="form-input row g-3" autoComplete="off" >

                <div className="col-md-6">
                    <label className="form-label col-md-12">Mushroom Name</label>
                    <input type="text" className="form-control" value={code} disabled />
                </div>

                <div className="col-md-6">
                    <label className="form-label col-md-12">Mushroom Name</label>
                    <input type="text" className="form-control" value={mushroomname} disabled />
                </div>

                <div className="col-md-6">
                    <label className="form-label col-md-12">Quantity</label>
                    <input type="text" className="form-control" value={quantity} disabled />
                </div>

                <div className="col-md-6">
                    <label className="form-label col-md-12">Net Weight</label>
                    <input type="text" className="form-control" value={netweight} disabled />
                </div>

                <div className="col-md-6">
                    <label className="form-label col-md-12">Create time</label>
                    <DatePicker
                        className="form-control"
                        dateFormat="d MMMM yyyy"
                        value={new Date(createdAt).toLocaleDateString("th-TH")}
                        disabled
                    />
                </div>

                <div className="col-md-6">
                    <label className="form-label col-md-12">Update time</label>
                    <DatePicker
                        className="form-control"
                        dateFormat="d MMMM yyyy"
                        value={new Date(updatedAt).toLocaleDateString("th-TH")}
                        disabled
                    />
                </div>

                <div className="button-add col-12">
                    <Link to="/warehouse">
                        <button type="button" className="btn btn-danger">Back</button>
                    </Link>
                </div>

            </form>
        </div>
    );
};

export default ViewWarehouse;
