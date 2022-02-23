import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./AddMember.css";

const AddMember = () => {
    const [memberID, setMemberID] = useState('');
    const [membername, setMembername] = useState('');
    const [idcard, setIdcard] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [status, setStatus] = useState(true);

    const addMember = async (event) => {
        event.preventDefault();
        await axios.post("http://localhost:3001/farmmember", {
            memberID: memberID,
            membername: membername,
            idcard: idcard,
            address: address,
            phone: phone,
            status: status
        });
        window.location.assign("/member")
    }

    return (
        <div>
            <div className="name-page">
                <p>New Member</p>
            </div>

            <form className="form-input row g-3" autoComplete="off" onSubmit={addMember}>

                <div className="col-md-12 form-check form-switch">
                    <label className="form-label"><b>Status</b></label>
                    <input className="form-check-input" type="checkbox" onChange={(event) => setStatus((event).target.checked)}/>
                </div>

                <div className="col-md-6">
                    <label className="form-label"><b>MemberID</b></label>
                    <input type="text" className="form-control" onChange={(event) => { setMemberID(event.target.value) }} required />
                </div>

                <div className="col-md-6">
                    <label className="form-label"><b>Name</b></label>
                    <input type="text" className="form-control" onChange={(event) => { setMembername(event.target.value) }} required />
                </div>

                <div className="col-md-6">
                    <label className="form-label"><b>ID Card</b></label>
                    <input type="number" className="form-control" maxLength="13" onChange={(event) => { setIdcard(event.target.value) }} required />
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

                    <Link to="/member" type="button" className="btn btn-danger">Back</Link>
                </div>

            </form>
        </div>
    );
};

export default AddMember;
