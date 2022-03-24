import "./FormAddWork.css"
import { Link } from "react-router-dom";
import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";

function FormAddWork() {
    //add
    const [worktype, setWorktype] = useState('');
    const [harvest, setHarvest] = useState('');
    const [damaged, setDamaged] = useState('');
    const [note, setNote] = useState('');
    const [perid, setPerid] = useState('');
    const [personnelList, setPersonnelList] = useState([]);

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

    //add
    const addWorkplace = async (event) => {
        if ((worktype !== "")) {
            event.preventDefault();
            window.location.assign("/pageworkplace")
            await axios.post("http://localhost:3001/workplace", {
                worktype: worktype,
                harvest: harvest,
                damaged: damaged,
                note: note,
                perid: perid
            });
        } else {
            alert("กรุณากรอกข้อมูลให้ครบถ้วน");
        }
    }

    useEffect(() => {
        getPersonnel();
    }, [])

    const getPersonnel = async () => {
        axios.get("http://localhost:3001/personnel").then((response) => {
            setPersonnelList(response.data);
        });
    }

    const personnelElements = personnelList.map((persondata) => {
        return <option key={persondata.perid} value={persondata.perid}>{persondata.name}</option>;
    });

    return (
        <div>
            <div className="name-page">
                <p>New Work</p>

            </div>

            <form className="form-input row g-3" autoComplete="off" onSubmit={addWorkplace}>

                <div className="col-md-6">
                    <label htmlFor="validationDefault02" className="form-label"><b>Work type</b></label>
                    <select className="col-md-4 form-select" required aria-label="select example" onChange={(event) => { setWorktype(event.target.value) }} >
                        <option value="">กรุณาเลือก*</option>
                        <option value="เก็บผลผลิต">เก็บผลผลิต</option>
                        <option value="ดูแล/ให้ยา">ดูแล/ให้ยา</option>
                        <option value="ทำความสะอาด">ทำความสะอาด</option>
                        <option value="ตรวจเช็ค">ตรวจเช็ค</option>
                    </select>
                </div>

                <div className="col-md-6">
                    <label htmlFor="harvest" className="form-label"><b>Harvest</b></label>
                    <input type="number" className="form-control" id="harvest" maxLength="10" onChange={(event) => { setHarvest(event.target.value) }} />
                </div>

                <div className="col-md-6">
                    <label htmlFor="damaged" className="form-label"><b>Damaged</b></label>
                    <div className="input-group">
                        <input type="number" className="form-control" id="damaged" maxLength="10" onChange={(event) => { setDamaged(event.target.value) }} />
                    </div>
                </div>

                <div className="col-md-6">
                    <label htmlFor="username" className="form-label"><b>Username</b></label>
                    <select className="form-select" id="username" onChange={(event) => { setPerid(event.target.value) }} required>
                        <option value="">กรุณาเลือก*</option>
                        {personnelElements}
                    </select>
                </div>

                <div className="col-md-12">
                    <label htmlFor="textarea" className="form-label"><b>Note</b></label>
                    <textarea className="form-control" aria-label="With textarea" onChange={(event) => { setNote(event.target.value) }} />
                </div>

                <div className="button-add col-12">
                    <button type="submit" className="btn btn-primary">Submit</button>

                    <Link to="/pageworkplace" type="button" className="btn btn-danger">Back</Link>
                </div>

            </form>
        </div>
    );
}

export default FormAddWork;