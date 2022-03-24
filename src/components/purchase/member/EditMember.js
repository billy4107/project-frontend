import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./EditMember.css";
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";

const EditMember = () => {
    const [memberID, setMemberID] = useState('');
    const [membername, setMembername] = useState('');
    const [idcard, setIdcard] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [status, setStatus] = useState('');
    const { fmid } = useParams();

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

    const editMember = async (event) => {
        event.preventDefault();
        window.location.assign("/member")
        await axios.patch(`http://localhost:3001/farmmember/${fmid}`, {
            memberID: memberID,
            membername: membername,
            idcard: idcard,
            phone: phone,
            address: address,
            status: status
        });
    }

    const getMemberById = async (fmid) => {
        const response = await axios.get(`http://localhost:3001/farmmember/${fmid}`);
        console.log(response);
        setMemberID(response.data.memberID);
        setMembername(response.data.membername);
        setIdcard(response.data.idcard);
        setPhone(response.data.phone);
        setAddress(response.data.address);
        setStatus(response.data.status);
    };

    useEffect(() => {
        if (fmid) {
            getMemberById(fmid);
        }
    }, [fmid])

    return (
        <div>
            <div className="name-page">
                <p>Edit Member</p>
            </div>

            <form className="form-input row g-3" autoComplete="off" onSubmit={editMember}>

                <div className="col-md-12 form-check form-switch">
                    <label className="form-label"><b>Status</b></label>
                    <input className="form-check-input" type="checkbox" checked={status} onChange={(event) => setStatus((event).target.checked)} />
                </div>

                <div className="col-md-6">
                    <label className="form-label"><b>MemberID</b></label>
                    <input type="text" className="form-control" value={memberID} onChange={(event) => setMemberID(event.target.value)} required />
                </div>

                <div className="col-md-6">
                    <label className="form-label"><b>Name</b></label>
                    <input type="text" className="form-control" value={membername} onChange={(event) => setMembername(event.target.value)} required />
                </div>

                <div className="col-md-6">
                    <label className="form-label"><b>ID Card</b></label>
                    <input type="number" className="form-control" maxLength="13" value={idcard} onChange={(event) => setIdcard(event.target.value)} required />
                </div>

                <div className="col-md-6">
                    <label className="form-label"><b>Phone</b></label>
                    <input type="number" className="form-control" maxLength="10" value={phone} onChange={(event) => setPhone(event.target.value)} required />
                </div>

                <div className="col-md-12">
                    <label className="form-label"><b>Address</b></label>
                    <textarea className="form-control" aria-label="With textarea" value={address} onChange={(event) => setAddress(event.target.value)} required />
                </div>

                <div className="button-add col-12">
                    <button type="submit" className="btn btn-primary">Submit</button>

                    <Link to="/member" type="button" className="btn btn-danger">Back</Link>
                </div>

            </form>
        </div>
    );
};

export default EditMember;
