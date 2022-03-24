import "./Packing.css"
import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import NavTab from '../NavTab';
import * as FaIcons from "react-icons/fa";
import axios from 'axios';
import ItemPacking from "./ItemPacking";
import EditPacking from "./EditPacking";
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";

function Packing() {
    const [inputEdit, setInputEdit] = useState(null);
    const [allCard, setAllCard] = useState([]);

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

    const getPacking = async () => {
        axios.get("http://localhost:3001/processed").then((response) => { setAllCard(response.data); });
    };

    const deleteProcessed = async (proid) => {
        const answer = window.confirm("are you sure?");
        if (answer) {
            await axios.delete(`http://localhost:3001/processed/${proid}`);
            getPacking();
        }
    };

    const onSetPageAdd = async (proid) => {
        const answer = window.confirm("are you sure?");
        if (!!proid) {
            if (answer) { await axios.patch(`http://localhost:3001/processed/sid4/${proid}`) }
        }
        window.location.reload();
    };

    useEffect(() => {
        getPacking();
    }, []);

    const cardElements = allCard
        .filter(thecard => thecard.sid === 3)
        .map((thecard) => {
            console.log(thecard)
            return <ItemPacking key={thecard.proid} thecard={thecard} deleteProcessed={deleteProcessed} onSetPageAdd={onSetPageAdd} setEdit={setEdit} />
        })

    let editInputElement = null;
    if (!!inputEdit) {
        editInputElement = <EditPacking onEditCloseClick={onEditCloseClick} />
    };

    function setEdit(edit) {
        setInputEdit(edit)
    };
    function onEditCloseClick() {
        setInputEdit(null);
    };

    return (
        <div>
            <div className="name-page">
                <p>Packing</p>
            </div>

            <div className="button">
                <Button variant="primary" disabled>
                    <FaIcons.FaCogs /> Packing
                </Button>
                #3
            </div>

            {editInputElement}

            <NavTab />
            <div className="card" id="card-add-sort">
                <div className="row">
                    {cardElements}
                </div>
            </div>
        </div>
    );
}

export default Packing;