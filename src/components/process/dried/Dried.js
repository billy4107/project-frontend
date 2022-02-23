import "./Dried.css";
import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import NavTab from '../NavTab';
import * as FaIcons from "react-icons/fa";
import axios from 'axios';
import ItemDried from "./ItemDried";
import EditDried from "./EditDried";

function Dried() {
    const [inputEdit, setInputEdit] = useState(null);
    const [allCard, setAllCard] = useState([]);

    const getDried = async () => {
        axios.get("http://localhost:3001/processed").then((response) => { setAllCard(response.data); });
    };

    const deleteProcessed = async (proid) => {
        const answer = window.confirm("are you sure?");
        if (answer) {
            await axios.delete(`http://localhost:3001/processed/${proid}`);
            getDried();
        }
    };

    const onSetPageAdd = async (proid) => {
        const answer = window.confirm("are you sure?");
        if (!!proid) {
            if (answer) { await axios.patch(`http://localhost:3001/processed/sid3/${proid}`) }
        }
        window.location.reload();
    };

    useEffect(() => {
        getDried();
    }, []);

    const cardElements = allCard
        .filter(thecard => thecard.sid === 2)
        .map((thecard) => {
            console.log(thecard)
            return <ItemDried key={thecard.proid} thecard={thecard} deleteProcessed={deleteProcessed} onSetPageAdd={onSetPageAdd} setEdit={setEdit} />
        })

    let editInputElement = null;
    if (!!inputEdit) {
        editInputElement = <EditDried onEditCloseClick={onEditCloseClick} />
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
                <p>Drying</p>
            </div>

            <div className="button">
                <Button variant="primary" disabled>
                    <FaIcons.FaCogs /> Drying
                </Button>
                #2
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

export default Dried;