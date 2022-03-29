import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";

const EditPersonnel = () => {
  const [codename, setCodename] = useState('');
  const [namee, setNamee] = useState('');
  const [birthday, setBirthday] = useState(new Date());
  const [idcard, setIdcard] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [status, setStatus] = useState(true);
  const { perid } = useParams();

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

  const EditPersonnel = async (event) => {
    event.preventDefault();
    await axios.patch(`http://localhost:3001/personnel/${perid}`, {
      codename: codename,
      name: namee,
      birthday: birthday,
      idcard: idcard,
      phone: phone,
      address: address,
      status: status
    });
    window.location.assign("/personnel")
  }

  const getPersonnelById = async (perid) => {
    const response = await axios.get(`http://localhost:3001/personnel/${perid}`);
    // console.log(response);
    setCodename(response.data.codename);
    setNamee(response.data.name);
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
        <p>Edit Partner</p>
      </div>

      <form className="form-input row g-3" autoComplete="off" onSubmit={EditPersonnel}>

        <div className="col-md-12 form-check form-switch">
          <label className="form-label"><b>Status</b></label>
          <input className="form-check-input" type="checkbox" checked={status} onChange={(event) => setStatus((event).target.checked)} />
        </div>

        <div className="col-md-6">
          <label className="form-label"><b>IDname</b></label>
          <input type="text" className="form-control" value={codename} onChange={(event) => { setCodename(event.target.value) }} required />
        </div>

        <div className="col-md-6">
          <label className="form-label"><b>Name</b></label>
          <input type="text" className="form-control" value={namee} onChange={(event) => { setNamee(event.target.value) }} required />
        </div>

        <div className="col-md-6">
          <label className="form-label"><b>Phone</b></label>
          <input type="number" className="form-control" maxLength="10" value={phone} onChange={(event) => { setPhone(event.target.value) }} required />
        </div>

        <div className="col-md-6">
          <label className="form-label"><b>idcard</b></label>
          <input type="number" className="form-control" maxLength="11" value={idcard} onChange={(event) => { setIdcard(event.target.value) }} required />
        </div>

        <div className="col-md-6">
          <label className="form-label"><b>Birthday</b></label>
          <DatePicker className="form-control"
            value={new Date(birthday).toLocaleDateString("th-TH")}
            onChange={(date) => setBirthday(date)} dateFormat="d/M/yyy" />
        </div>

        <div className="col-md-12">
          <label className="form-label"><b>Address</b></label>
          <textarea className="form-control" aria-label="With textarea" value={address} onChange={(event) => { setAddress(event.target.value) }} required />
        </div>

        <div className="button-add col-12">
          <button type="submit" className="btn btn-primary">Submit</button>

          <Link to="/personnel" type="button" className="btn btn-danger">Back</Link>
        </div>

      </form>
    </div>
  );
};

export default EditPersonnel;
