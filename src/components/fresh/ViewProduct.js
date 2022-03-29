import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { subDays } from 'date-fns';
import { addDays } from 'date-fns';
import axios from 'axios';
import { Link, useParams, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import "./ViewProduct.css";

const ViewProduct = () => {
    const [idproduct, setIdproduct] = useState('');
    const [mushroomname, setMushroomname] = useState('');
    const [amount, setAmount] = useState('');
    const [partner, setPartner] = useState('');
    const [note, setNote] = useState('');
    const [importdate, setImportdate] = useState(new Date());
    const [expdate, setExpdate] = useState(new Date());
    const { pfid } = useParams();

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

    const getProductById = async (pfid) => {
        const response = await axios.get(`http://localhost:3001/productfresh/${pfid}`);
        // console.log(response);
        setIdproduct(response.data.idproduct);
        setMushroomname(response.data.mushroomname);
        setAmount(response.data.amount);
        setPartner(response.data.partner);
        setNote(response.data.note);
        setImportdate(response.data.importdate);
        setExpdate(response.data.expdate);
    };

    useEffect(() => {
        if (pfid) {
            getProductById(pfid);
        }
    }, [pfid])

    return (
        <div>
            <div className="name-page">
                <p>View Product</p>
            </div>

            <form className="form-input row g-3" autoComplete="off" >

                <div className="col-md-6">
                    <label className="form-label"><b>ID Product</b></label>
                    <input type="text" className="form-control" placeholder="ID Product" value={idproduct} disabled/>
                </div>

                <div className="col-md-6">
                    <label className="form-label"><b>Mushroom name</b></label>
                    <input type="text" className="form-control" placeholder="Mushroom name" value={mushroomname} disabled/>
                </div>

                <div className="col-md-6">
                    <label className="form-label"><b>Amount</b></label>
                    <input type="number" className="form-control" placeholder="Amount" value={amount} disabled/>
                </div>

                <div className="col-md-6">
                    <label className="form-label"><b>Partner</b></label>
                    <input type="text" className="form-control" placeholder="Partner" value={partner} disabled/>
                </div>

                <div className="col-md-6">
                    <label className="form-label"><b>Import Date</b></label>
                    <DatePicker
                        className="form-control"
                        onChange={(date) => setImportdate(date)}
                        dateFormat="d MMMM yyyy"
                        value={new Date(importdate).toLocaleDateString("th-TH")}
                        disabled
                    />
                </div>

                <div className="col-md-6">
                    <label className="form-label"><b>Exp Date</b></label>
                    <DatePicker
                        className="form-control"
                        highlightDates={[subDays(new Date(), 0), addDays(new Date(), 15)]}
                        onChange={(date) => setExpdate(date)}
                        dateFormat="d MMMM yyyy"
                        value={new Date(expdate).toLocaleDateString("th-TH")}
                        disabled
                    />
                </div>

                <div className="col-md-12">
                    <label htmlFor="textarea" className="form-label"><b>Note</b></label>
                    <textarea className="form-control" aria-label="With textarea" value={note} disabled/>
                </div>

                <div className="button-add col-12">
                    <Link to="/pagewarehouse/fresh/manageproduct">
                        <button type="button" className="btn btn-danger">Back</button>
                    </Link>
                </div>

            </form>
        </div>
    );
};

export default ViewProduct;
