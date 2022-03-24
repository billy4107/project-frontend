import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./EditWarehouse.css";
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";

const EditWarehouse = () => {

    const { wareid } = useParams();

    const [mushroomname, setMushroomname] = useState('');
    const [quantity, setQuantity] = useState('');
    const [netweight, setNetweight] = useState('');
    const [code, setCode] = useState('');

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

    const editWarehouse = async (event) => {
        event.preventDefault();
        window.location.assign("/warehouse")
        await axios.patch(`http://localhost:3001/warehouse/${wareid}`, {
            mushroomname: mushroomname,
            quantity: quantity,
            netweight: netweight
        });
    }

    const getWarehouseById = async (wareid) => {
        const response = await axios.get(`http://localhost:3001/warehouse/${wareid}`);
        console.log(response);
        setMushroomname(response.data.mushroomname);
        setQuantity(response.data.quantity);
        setNetweight(response.data.netweight);
        setCode(response.data.code);
    };

    useEffect(() => {
        if (wareid) {
            getWarehouseById(wareid);
        }
    }, [wareid])

    return (
        <div>
            <div className="name-page">
                <p>Edit Warehouse</p>
            </div>

            <form className="form-input row g-3" autoComplete="off" onSubmit={editWarehouse} >

                <div className="col-md-6">
                    <label className="form-label col-md-12">Mushroom Name</label>
                    <input type="text" className="form-control" value={code} disabled />
                </div>

                <div className="col-md-6">
                    <label className="form-label col-md-12">Mushroom Name</label>
                    <input type="text" className="form-control" value={mushroomname} onChange={(event) => { setMushroomname(event.target.value) }} />
                </div>

                <div className="col-md-6">
                    <label className="form-label col-md-12">Quantity</label>
                    <input type="text" className="form-control" value={quantity} onChange={(event) => { setQuantity(event.target.value) }} />
                </div>

                <div className="col-md-6">
                    <label className="form-label col-md-12">Net Weight</label>
                    <input type="text" className="form-control" value={netweight} onChange={(event) => { setNetweight(event.target.value) }} />
                </div>

                <div className="button-add col-12">
                    <button type="submit" className="btn btn-primary">Submit</button>

                    <Link to="/warehouse" type="button" className="btn btn-danger">Back</Link>
                </div>

            </form>
        </div>
    );
};

export default EditWarehouse;
