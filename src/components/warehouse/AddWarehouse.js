import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";

const AddWarehouse = () => {
    // const [idproduct, setIdproduct] = useState('');
    const [mushroomname, setMushroomname] = useState('');
    const [quantity, setQuantity] = useState('');
    const [netweight, setNetweight] = useState('');

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
        await axios.post("http://localhost:3001/warehouse", {
            // idproduct: idproduct,
            mushroomname: mushroomname,
            quantity: quantity,
            netweight: netweight
        });
    }
    return (
        <div>
            <div className="name-page">
                <p>Add Warehouse</p>
            </div>

            <form className="form-input row g-3" autoComplete="off" onSubmit={addProduct} >

                {/* <div className="col-md-6">
                    <label className="form-label"><b>ID Product</b></label>
                    <input type="text" className="form-control" placeholder="ID Product" onChange={(event) => { setIdproduct(event.target.value)}} required/>
                </div> */}

                <div className="col-md-6">
                    <label className="form-label"><b>Mushroom name</b></label>
                    <input type="text" className="form-control" placeholder="Mushroom name" onChange={(event) => { setMushroomname(event.target.value) }} required />
                </div>

                <div className="col-md-6">
                    <label className="form-label"><b>Quantity</b></label>
                    <input type="number" className="form-control" placeholder="Quantity" onChange={(event) => { setQuantity(event.target.value) }} required />
                </div>

                <div className="col-md-6">
                    <label className="form-label"><b>Net weight</b></label>
                    <input type="text" className="form-control" placeholder="Net weight" onChange={(event) => { setNetweight(event.target.value) }} required />
                </div>

                <div className="button-add col-12">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>

            </form>
        </div>
    )
}

export default AddWarehouse