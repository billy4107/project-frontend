import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ViewPartner = () => {
  const [partnerID, setPartnerID] = useState('');
  const [partnername, setPartnername] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState(true);
  const { pid } = useParams();

  const getPartnerById = async (pid) => {
    const response = await axios.get(`http://localhost:3001/partner/${pid}`);
    console.log(response);
    setPartnerID(response.data.partnerID);
    setPartnername(response.data.partnername);
    setPhone(response.data.phone);
    setAddress(response.data.address);
    setStatus(response.data.status);
  };

  useEffect(() => {
    if (pid) {
      getPartnerById(pid);
    }
  }, [pid])
  return (
    <div>
      <div className="name-page">
        <p>{partnername}</p>
      </div>

      <form className="form-input row g-3" autoComplete="off">

        <div className="col-md-12 form-check form-switch">
          <label className="form-label"><b>Status</b></label>
          <input className="form-check-input" type="checkbox" checked={status} disabled />
        </div>

        <div className="col-md-6">
          <label className="form-label"><b>PartnerID</b></label>
          <input type="text" className="form-control" value={partnerID} disabled />
        </div>

        <div className="col-md-6">
          <label className="form-label"><b>Name</b></label>
          <input type="text" className="form-control" value={partnername} disabled />
        </div>

        <div className="col-md-6">
          <label className="form-label"><b>Phone</b></label>
          <input type="number" className="form-control" maxLength="10" value={phone} disabled />
        </div>

        <div className="col-md-12">
          <label className="form-label"><b>Address</b></label>
          <textarea className="form-control" aria-label="With textarea" value={address} disabled />
        </div>

        <div className="button-add col-12">
          <Link to="/partner">
            <button type="button" className="btn btn-danger">Back</button>
          </Link>
        </div>

      </form>
    </div>
  );
};

export default ViewPartner;
