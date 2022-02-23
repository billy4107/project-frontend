import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ViewMember = () => {
    const [memberID, setMemberID] = useState('');
    const [membername, setMembername] = useState('');
    const [idcard, setIdcard] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [status, setStatus] = useState('');
    const { fmid } = useParams();

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
                <p>{membername}</p>
            </div>

            <form className="form-input row g-3" autoComplete="off" >

                <div className="col-md-12 form-check form-switch">
                    <label className="form-label"><b>Status</b></label>
                    <input className="form-check-input" type="checkbox" checked={status} disabled />
                </div>

                <div className="col-md-6">
                    <label className="form-label"><b>MemberID</b></label>
                    <input type="text" className="form-control" value={memberID} disabled />
                </div>

                <div className="col-md-6">
                    <label className="form-label"><b>Name</b></label>
                    <input type="text" className="form-control" value={membername} disabled />
                </div>

                <div className="col-md-6">
                    <label className="form-label"><b>ID Card</b></label>
                    <input type="number" className="form-control" maxLength="13" value={idcard} disabled />
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
                    <Link to="/member">
                        <button type="button" className="btn btn-danger">Back</button>
                    </Link>
                </div>

            </form>
        </div>
    );
};

export default ViewMember;