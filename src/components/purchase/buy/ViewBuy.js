import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";

const ViewBuy = () => {
  const [numberbuy, setNumberbuy] = useState('');
  const [mushroomname, setMushroomname] = useState('');
  const [amount, setAmount] = useState('');
  const [price, setPrice] = useState('');
  const [fmid, setFmid] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [updatedAt, setUpdatedAt] = useState('');

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

  const getBuyById = async (buyid) => {
    const response = await axios.get(`http://localhost:3001/buymushroom/${buyid}`);
    console.log(response);
    setMushroomname(response.data.mushroomname);
    setAmount(response.data.amount);
    setPrice(response.data.price);
    setFmid(response.data.fmid);
    setCreatedAt(response.data.createdAt);
    setUpdatedAt(response.data.updatedAt);
    setNumberbuy(response.data.numberbuy);
  };

  useEffect(() => {
    if (buyid) {
      getBuyById(buyid);
    }
  }, [buyid])

  return (
    <div>
      <div className="name-page">
        <p>View Buy</p>
      </div>

      <form className="form-input row g-3" autoComplete="off" >

        <div className="col-md-12">
          <label className="form-label"><b>Number</b></label>
          <input type="text" className="form-control" value={numberbuy} disabled />
        </div>

        <div className="col-md-6">
          <label className="form-label"><b>Mushroom name</b></label>
          <input type="text" className="form-control" value={mushroomname} disabled />
        </div>

        <div className="col-md-6">
          <label className="form-label"><b>Amount</b></label>
          <input type="number" className="form-control" maxLength="10" value={amount} disabled />
        </div>

        <div className="col-md-6">
          <label className="form-label"><b>price</b></label>
          <input type="number" className="form-control" maxLength="10" value={price} disabled />
        </div>

        <div className="col-md-6">
          <label className="form-label"><b>By name</b></label>
          <select className="form-select" disabled>
            <option>{fmid}</option>
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label"><b>Create time</b></label>
          <input type="text" className="form-control" value={new Date(createdAt).toLocaleString("th-TH")} disabled />
        </div>

        <div className="col-md-6">
          <label className="form-label"><b>Update time</b></label>
          <input type="text" className="form-control" value={new Date(updatedAt).toLocaleString("th-TH")} disabled />
        </div>

        <div className="button-add col-12">
          <Link to="/buymushroom">
            <button type="button" className="btn btn-danger">Back</button>
          </Link>
        </div>

      </form>
    </div>
  );
};

export default ViewBuy;
