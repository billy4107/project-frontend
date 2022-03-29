import axios from 'axios';
import "./EditWorkplace.css"
import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";

const EditWorkplace = () => {
    const [worktype, setWorktype] = useState('');
    const [harvest, setHarvest] = useState('');
    const [damaged, setDamaged] = useState('');
    const [note, setNote] = useState('');
    const [perid, setPerid] = useState('');

    const { wid } = useParams();

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

    const editWorkplaces = async (event) => {
        event.preventDefault();
        if ((worktype !== "")) {
        window.location.assign("/pageworkplace")
        await axios.patch(`http://localhost:3001/workplace/${wid}`, {
            worktype: worktype,
            harvest: harvest,
            damaged: damaged,
            note: note
        });
        } else {
            alert("กรุณากรอกข้อมูลให้ครบถ้วน");
        }
    }

    const getWorkplaceById = async (wid) => {
        const response = await axios.get(`http://localhost:3001/workplace/${wid}`);
        // console.log(response);
        setWorktype(response.data.worktype);
        setHarvest(response.data.harvest);
        setDamaged(response.data.damaged);
        setNote(response.data.note);
        setPerid(response.data.perid);
    };

    useEffect(() => {
        if (wid) {
            getWorkplaceById(wid);
        }
    }, [wid])

    return (
        <div>
            <div className="name-page">
                <p>New Work</p>

            </div>

            <form className="form-input row g-3" onSubmit={editWorkplaces}>

                <div className="col-md-6">
                    <label className="form-label"><b>Work type</b></label>
                    <select className="col-md-4 form-select"
                        aria-label="select example"
                        value={worktype}
                        onChange={(event) => setWorktype(event.target.value)}
                        required
                    >
                        <option value="">กรุณาเลือก*</option>
                        <option value="เก็บผลผลิต">เก็บผลผลิต</option>
                        <option value="ดูแล/ให้ยา">ดูแล/ให้ยา</option>
                        <option value="ทำความสะอาด">ทำความสะอาด</option>
                        <option value="ตรวจเช็ค">ตรวจเช็ค</option>
                    </select>
                </div>

                <div className="col-md-6">
                    <label className="form-label"><b>Harvest</b></label>
                    <input type="number"
                        className="form-control"
                        value={harvest}
                        onChange={(event) => setHarvest(event.target.value)}
                    />
                </div>

                <div className="col-md-6">
                    <label className="form-label"><b>Damaged</b></label>
                    <input type="number"
                        className="form-control"
                        value={damaged}
                        onChange={(event) => setDamaged(event.target.value)}
                    />
                </div>

                <div className="col-md-6">
                    <label className="form-label"><b>Username</b></label>
                    <select className="form-select" onChange={(event) => setPerid(event.target.value)} disabled>
                        <option>{perid}</option>
                    </select>
                </div>

                <div className="col-md-12">
                    <label className="form-label"><b>Note</b></label>
                    <textarea className="form-control"
                        value={note}
                        onChange={(event) => setNote(event.target.value)}
                    />
                </div>

                <div className="button-add col-12">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to="/pageworkplace">
                        <button type="button" className="btn btn-danger">Back</button>
                    </Link>
                </div>

            </form>
        </div>
    );
}

export default EditWorkplace
