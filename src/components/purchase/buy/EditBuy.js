import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./EditBuy.css";
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";

const EditBuy = () => {
    const [mushroomname, setMushroomname] = useState('');
    const [amount, setAmount] = useState('');
    const [price, setPrice] = useState('');
    const [fmid, setFmid] = useState('');

    const { buyid } = useParams();

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

    const editBuy = async (event) => {
        event.preventDefault();
        window.location.assign("/buymushroom")
        await axios.patch(`http://localhost:3001/buymushroom/${buyid}`, {
            mushroomname: mushroomname,
            amount: amount,
            price: price
        });
    }

    const getBuyById = async (buyid) => {
        const response = await axios.get(`http://localhost:3001/buymushroom/${buyid}`);
        console.log(response);
        setMushroomname(response.data.mushroomname);
        setAmount(response.data.amount);
        setPrice(response.data.price);
        setFmid(response.data.fmid);
    };

    useEffect(() => {
        if (buyid) {
            getBuyById(buyid);
        }
    }, [buyid])

    console.log(fmid['membername']);

    return (
        <div>
            <div className="name-page">
                <p>Edit Buy</p>
            </div>

            <form className="form-input row g-3" autoComplete="off" onSubmit={editBuy} >

                <div className="col-md-6">
                    <label className="form-label"><b>Mushroom name</b></label>
                    <input type="text" className="form-control" value={mushroomname} onChange={(event) => { setMushroomname(event.target.value) }} required />
                </div>

                <div className="col-md-6">
                    <label className="form-label"><b>Amount</b></label>
                    <input type="number" className="form-control" maxLength="10" value={amount} onChange={(event) => { setAmount(event.target.value) }} required />
                </div>

                <div className="col-md-6">
                    <label className="form-label"><b>price</b></label>
                    <input type="number" className="form-control" maxLength="10" value={price} onChange={(event) => { setPrice(event.target.value) }} required />
                </div>

                <div className="col-md-6">
                    <label className="form-label"><b>By name</b></label>
                    <select className="form-select" onChange={(event) => { setFmid(event.target.value) }} disabled>
                        <option>{fmid}</option>
                    </select>
                </div>

                <div className="button-add col-12">
                    <button type="submit" className="btn btn-primary">Submit</button>

                    <Link to="/buymushroom" type="button" className="btn btn-danger">Back</Link>
                </div>

            </form>
        </div>
    );
};

export default EditBuy;
