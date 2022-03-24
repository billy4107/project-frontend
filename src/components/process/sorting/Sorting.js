import "./Sorting.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import Button from 'react-bootstrap/Button';
import * as AiIcons from "react-icons/ai";
import ItemSort from './ItemSort';
import axios from 'axios';
import EditSorting from "./EditSorting";
import { emptySort } from "../../../data/Empty";
import NavTab from "../NavTab";

const Sorting = () => {
    const [, setInput] = useState(emptySort);
    const [inputAdd, setInputAdd] = useState(null);
    const [inputEdit, setInputEdit] = useState(null);
    const [allCard, setAllCard] = useState([]);
    const [mushroomname, setMushroomname] = useState('');
    const [sortingweight, setSortingweight] = useState('');
    const [sid, setSid] = useState();

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

    const addSorting = async (event) => {
        if ((sortingweight !== "")) {
            event.preventDefault();
            window.location.assign("/pageprocess/sorting")
            await axios.post("http://localhost:3001/processed", {
                mushroomname: mushroomname,
                sortingweight: sortingweight,
                sid: sid
            });
            setInput(emptySort);
            setInputAdd(null);
        } else {
            alert("กรุณากรอกข้อมูลให้ครบถ้วน");
        }
    };

    const getSorting = async () => {
        axios.get("http://localhost:3001/processed").then((response) => { setAllCard(response.data); });
    };

    const deleteProcessed = async (proid) => {
        const answer = window.confirm("are you sure?");
        if (answer) {
            await axios.delete(`http://localhost:3001/processed/${proid}`);
            getSorting();
        }
    };

    const onSetPageAdd = async (proid) => {
        const answer = window.confirm("are you sure?");
        if (!!proid) {
            if (answer) { await axios.patch(`http://localhost:3001/processed/sid2/${proid}`) }
        }
        window.location.reload();
    };

    function onPageAdd() {
        setSid(1);
    };

    useEffect(() => {
        getSorting();
    }, []);

    const cardElements = allCard
        .filter(thecard => thecard.sid === 1)
        .map((thecard) => {
            // console.log(thecard)
            return <ItemSort key={thecard.proid} thecard={thecard} setEdit={setEdit} onSetPageAdd={onSetPageAdd} deleteProcessed={deleteProcessed} />
        });

    function onAddOpenClick(add) {
        setInputAdd(add);
    };
    function onAddCloseClick() {
        setInputAdd(null);
    };

    let Addinput = null;
    if (!!inputAdd) {
        Addinput = (
            <div className="view-table">
                <div className="view-table-bg" onClick={onAddCloseClick} />
                <div className="view-table-content">
                    <div className="view-header"> <h3>Add</h3> </div>
                    <form className="form-input row g-3" autoComplete="off" onSubmit={addSorting}>

                        <div className="col-md-12">
                            <label className="form-label">Mushroom</label>
                            <input type="text" className="form-control" name="mushroom" onChange={(event) => { setMushroomname(event.target.value) }} required />
                        </div>

                        <div className="col-md-12">
                            <label className="form-label">weight</label>
                            <input type="number" className="form-control" name="weightSorting" onChange={(event) => { setSortingweight(event.target.value) }} maxLength="10" placeholder="Weight" required />
                        </div>

                        <Button variant="primary" type="submit" onClick={onPageAdd}> Save </Button>
                        <Button variant="danger" onClick={onAddCloseClick}> Close </Button>

                    </form>
                </div>
            </div>
        )
    };

    let editInputElement = null;
    if (!!inputEdit) {
        editInputElement = <EditSorting onEditCloseClick={onEditCloseClick} />
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
                <p>Sorting</p>
            </div>

            <div className="button">
                <Button variant="primary" onClick={onAddOpenClick}>
                    <AiIcons.AiFillPlusCircle /> Add new
                </Button>
                #1
            </div>

            {Addinput}
            {editInputElement}

            <NavTab />
            <div className="card" id="card-add-sort">
                <div className="row">
                    {cardElements}
                </div>
            </div>
        </div>
    );
};

export default Sorting
