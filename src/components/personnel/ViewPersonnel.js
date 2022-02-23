import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import { Link, useParams } from 'react-router-dom';

const ViewPersonnel = () => {
  const [codename, setCodename] = useState('');
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState(new Date());
  const [idcard, setIdcard] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [status, setStatus] = useState(true);
  const { perid } = useParams();

  const getPersonnelById = async (perid) => {
    const response = await axios.get(`http://localhost:3001/personnel/${perid}`);
    console.log(response);
    setCodename(response.data.codename);
    setName(response.data.name);
    setBirthday(response.data.birthday);
    setIdcard(response.data.idcard);
    setPhone(response.data.phone);
    setAddress(response.data.address);
    setStatus(response.data.status);
  };

  useEffect(() => {
    if (perid) {
      getPersonnelById(perid);
    }
  }, [perid])

  return (
    <div>
      <div className="name-page">
        <p>View Partner</p>
      </div>

      <form className="form-input row g-3" autoComplete="off" >

        <div className="col-md-12 form-check form-switch">
          <label className="form-label"><b>Status</b></label>
          <input className="form-check-input" type="checkbox" checked={status} disabled />
        </div>

        <div className="col-md-6">
          <label className="form-label"><b>IDname</b></label>
          <input type="text" className="form-control" value={codename} disabled />
        </div>

        <div className="col-md-6">
          <label className="form-label"><b>Name</b></label>
          <input type="text" className="form-control" value={name} disabled />
        </div>

        <div className="col-md-6">
          <label className="form-label"><b>Phone</b></label>
          <input type="number" className="form-control" maxLength="10" value={phone} disabled />
        </div>

        <div className="col-md-6">
          <label className="form-label"><b>idcard</b></label>
          <input type="number" className="form-control" maxLength="11" value={idcard} disabled />
        </div>

        <div className="col-md-6">
          <label className="form-label"><b>Birthday</b></label>
          <DatePicker className="form-control"
            value={new Date(birthday).toLocaleDateString("th-TH")}
            dateFormat="d/M/yyy" disabled />
        </div>

        <div className="col-md-12">
          <label className="form-label"><b>Address</b></label>
          <textarea className="form-control" aria-label="With textarea" value={address} disabled />
        </div>

        <div className="button-add col-12">
          <Link to="/personnel">
            <button type="button" className="btn btn-danger">Back</button>
          </Link>
        </div>

      </form>
    </div>
  );
};

export default ViewPersonnel;
