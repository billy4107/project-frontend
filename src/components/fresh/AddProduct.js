import './AddProduct.css';
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { subDays } from 'date-fns';
import { addDays } from 'date-fns';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";

const AddProduct = () => {
    const [idproduct, setIdproduct] = useState('');
    const [mushroomname, setMushroomname] = useState('');
    const [amount, setAmount] = useState('');
    const [partner, setPartner] = useState('');
    const [note, setNote] = useState('');
    const [importdate, setImportdate] = useState(new Date());
    const [expdate, setExpdate] = useState(new Date());

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

    const addProduct = async (event) => {
        event.preventDefault();
        window.location.reload();
        await axios.post("http://localhost:3001/productfresh", {
            idproduct: idproduct,
            mushroomname: mushroomname,
            amount: amount,
            partner: partner,
            note: note,
            importdate: importdate,
            expdate: expdate
        });
    }
    return (
        <div>
            <div className="name-page">
                <p>Add Product</p>
            </div>

            <form className="form-input row g-3" autoComplete="off" onSubmit={addProduct} >

                <div className="col-md-6">
                    <label className="form-label"><b>ID Product</b></label>
                    <input type="text" className="form-control" placeholder="ID Product" onChange={(event) => { setIdproduct(event.target.value) }} required />
                </div>

                <div className="col-md-6">
                    <label className="form-label"><b>Mushroom name</b></label>
                    <input type="text" className="form-control" placeholder="Mushroom name" onChange={(event) => { setMushroomname(event.target.value) }} required />
                </div>

                <div className="col-md-6">
                    <label className="form-label"><b>Amount</b></label>
                    <input type="number" className="form-control" placeholder="Amount" onChange={(event) => { setAmount(event.target.value) }} required />
                </div>

                <div className="col-md-6">
                    <label className="form-label"><b>Partner</b></label>
                    <input type="text" className="form-control" placeholder="Partner" onChange={(event) => { setPartner(event.target.value) }} required />
                </div>

                <div className="col-md-6">
                    <label className="form-label"><b>Import Date</b></label>
                    <DatePicker
                        className="form-control"
                        selected={importdate}
                        selectsStart
                        startDate={importdate}
                        endDate={expdate}
                        onChange={(date) => setImportdate(date)}
                        dateFormat="d/M/yyy"
                    />
                </div>

                <div className="col-md-6">
                    <label className="form-label"><b>Exp Date</b></label>
                    <DatePicker
                        className="form-control"
                        selected={expdate}
                        selectsEnd
                        startDate={importdate}
                        endDate={expdate}
                        highlightDates={[subDays(new Date(), 0), addDays(new Date(), 15)]}
                        onChange={(date) => setExpdate(date)}
                        dateFormat="d/M/yyy"
                    />
                </div>
                <div className="col-md-12">
                    <label htmlFor="textarea" className="form-label"><b>Note</b></label>
                    <textarea className="form-control" aria-label="With textarea" onChange={(event) => { setNote(event.target.value) }} />
                </div>

                <div className="button-add col-12">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>

            </form>
        </div>
    )
}

export default AddProduct
