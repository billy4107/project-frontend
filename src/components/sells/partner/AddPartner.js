import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";

const AddPartner = () => {
  const [partnerID, setPartnerID] = useState('');
  const [partnername, setPartnername] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState(true);

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

  const addPartner = async (event) => {
    event.preventDefault();
    await axios.post("http://localhost:3001/partner", {
      partnerID: partnerID,
      partnername: partnername,
      address: address,
      phone: phone,
      status: status
    });
    window.location.assign("/partner")
  }


  return (
    <div>
      <div className="name-page">
        <p>New Partner</p>
      </div>

      <form className="form-input row g-3" autoComplete="off" onSubmit={addPartner}>

        <div className="col-md-12 form-check form-switch">
          <label className="form-label"><b>Status</b></label>
          <input className="form-check-input" type="checkbox" onChange={(event) => setStatus((event).target.checked)} />
        </div>

        <div className="col-md-6">
          <label className="form-label"><b>PartnerID</b></label>
          <input type="text" className="form-control" onChange={(event) => { setPartnerID(event.target.value) }} required />
        </div>

        <div className="col-md-6">
          <label className="form-label"><b>Name</b></label>
          <input type="text" className="form-control" onChange={(event) => { setPartnername(event.target.value) }} required />
        </div>

        <div className="col-md-6">
          <label className="form-label"><b>Phone</b></label>
          <input type="number" className="form-control" maxLength="10" onChange={(event) => { setPhone(event.target.value) }} required />
        </div>

        <div className="col-md-12">
          <label className="form-label"><b>Address</b></label>
          <textarea className="form-control" aria-label="With textarea" onChange={(event) => { setAddress(event.target.value) }} required />
        </div>

        <div className="button-add col-12">
          <button type="submit" className="btn btn-primary">Submit</button>

          <Link to="/partner" type="button" className="btn btn-danger">Back</Link>
        </div>

      </form>
    </div>
  );
};

export default AddPartner;
