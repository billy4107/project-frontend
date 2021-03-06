import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";

const EditSell = () => {
  const [mushroomname, setMushroomname] = useState('');
  const [amount, setAmount] = useState('');
  const [price, setPrice] = useState('');
  const [pid, setPid] = useState('');

  const { sellid } = useParams();

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

  const addSell = async (event) => {
    event.preventDefault();
    await axios.patch(`http://localhost:3001/sellmushroom/${sellid}`, {
      mushroomname: mushroomname,
      amount: amount,
      price: price
    });
    window.location.assign("/sellmushroom")
  }

  const getSellById = async (sellid) => {
    const response = await axios.get(`http://localhost:3001/sellmushroom/${sellid}`);
    // console.log(response);
    setMushroomname(response.data.mushroomname);
    setAmount(response.data.amount);
    setPrice(response.data.price);
    setPid(response.data.pid);
  };

  useEffect(() => {
    if (sellid) {
      getSellById(sellid);
    }
  }, [sellid])


  return (
    <div>
      <div className="name-page">
        <p>Edit Sell</p>
      </div>

      <form className="form-input row g-3" autoComplete="off" onSubmit={addSell} >

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
          <select className="form-select" onChange={(event) => { setPid(event.target.value) }} disabled>
            <option>{pid}</option>
          </select>
        </div>

        <div className="button-add col-12">
          <button type="submit" className="btn btn-primary">Submit</button>

          <Link to="/sellmushroom" type="button" className="btn btn-danger">Back</Link>
        </div>

      </form>
    </div>
  );
};

export default EditSell;
