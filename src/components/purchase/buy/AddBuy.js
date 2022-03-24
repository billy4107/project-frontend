import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";

const AddBuy = () => {
    const [memberList, setMemberList] = useState([]);
    const [mushroomname, setMushroomname] = useState('');
    const [amount, setAmount] = useState('');
    const [price, setPrice] = useState('');
    const [fmid, setFmid] = useState('');

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

    useEffect(() => {
        getMember();
    }, [])

    const addBuy = async (event) => {
        event.preventDefault();
        await axios.post("http://localhost:3001/buymushroom", {
            mushroomname: mushroomname,
            amount: amount,
            price: price,
            fmid: fmid,
        });
        window.location.assign("/buymushroom")
    }

    const getMember = async () => {
        axios.get("http://localhost:3001/farmmember/status").then((response) => {
            setMemberList(response.data);
        });
    }

    const memberElements = memberList.map((memberdata) => {
        return <option key={memberdata.fmid} value={memberdata.fmid}>{memberdata.membername}</option>;
    });

    return (
        <div>
            <div className="name-page">
                <p>New Buy</p>
            </div>

            <form className="form-input row g-3" autoComplete="off" onSubmit={addBuy} >

                <div className="col-md-6">
                    <label className="form-label"><b>Mushroom name</b></label>
                    <input type="text" className="form-control" onChange={(event) => { setMushroomname(event.target.value) }} required />
                </div>

                <div className="col-md-6">
                    <label className="form-label"><b>Amount</b></label>
                    <input type="number" className="form-control" maxLength="10" onChange={(event) => { setAmount(event.target.value) }} required />
                </div>

                <div className="col-md-6">
                    <label className="form-label"><b>price</b></label>
                    <input type="number" className="form-control" maxLength="10" onChange={(event) => { setPrice(event.target.value) }} required />
                </div>

                <div className="col-md-6">
                    <label className="form-label"><b>By name</b></label>
                    <select className="form-select" onChange={(event) => { setFmid(event.target.value) }} required>
                        <option value="">กรุณาเลือก*</option>
                        {memberElements}
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

export default AddBuy;
