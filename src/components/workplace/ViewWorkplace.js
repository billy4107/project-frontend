import "./ViewWorkplace.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import axios from "axios";

const ViewWorkplace = (props) => {

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
    const { workdata, onBgClick } = props;

    return (
        <div className="view-table">
            <div className="view-table-bg" onClick={onBgClick} />
            <div className="view-table-content">
                <div className="view-header">
                    <h3>View</h3>
                </div>
                <form className="view-from form-input row">

                    <div className="col columnview">
                        <label className="form-label col-md-12">Work name</label>
                        <input type="text" className="form-control" value={workdata.worktype} disabled />
                    </div>

                    <div className="col columnview">
                        <label className="form-label col-md-12">Harvest</label>
                        <input type="text" className="form-control" value={workdata.harvest} disabled />
                    </div>

                    <div className="col columnview">
                        <label className="form-label col-md-12">Damaged</label>
                        <input type="text" className="form-control" value={workdata.damaged} disabled />
                    </div>

                    <div className="col columnview">
                        <label className="form-label col-md-12">Username</label>
                        <input type="text" className="form-control" value={workdata.Personnel['name']} disabled />
                    </div>

                    <div className="col columnview">
                        <label className="form-label col-md-12">Note</label>
                        <input type="text" className="form-control" value={workdata.note} disabled />
                    </div>

                    <div className="col columnview">
                        <label className="form-label col-md-12">Create time</label>
                        <input type="text" className="form-control" value={new Date(workdata.createdAt).toLocaleString("th-TH")} disabled />
                    </div>

                    <div className="col columnview">
                        <label className="form-label col-md-12">Update time</label>
                        <input type="text" className="form-control" value={new Date(workdata.updatedAt).toLocaleString("th-TH")} disabled />
                    </div>

                </form>
            </div>
        </div>
    );
}

export default ViewWorkplace;