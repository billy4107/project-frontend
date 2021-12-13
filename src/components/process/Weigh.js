import "./Weigh.css";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import * as VscIcons from 'react-icons/vsc';
import * as AiIcons from "react-icons/ai";
import NavTab from './NavTab';
import Modal from 'react-bootstrap/Modal'


function Weigh() {
    const emptyNote = {
        mushroom: '', weight: '', username: ''
    };


    const [show, setShow] = useState(false);
    const [input, setInput] = useState(emptyNote);
    const [allCard, setAllCard] = useState([]);

    function onInputValueChange(event) {
        const { name, value } = event.target;
        setInput((prevInput) => {
            return {
                ...prevInput,
                [name]: value
            }
        });
    }

    function onInputSubmit(event) {
        event.preventDefault();

        
        setAllCard((prevAllCard) => {
            const newCard = { ...input };
            newCard.id = Date.now().toString();
            return [input, ...prevAllCard];
        });
    
    }

    const cardElements = allCard.map((thecard) => {
        return (
            <div className="column" >
                <div className="card list">
                    <div className="card-body" key={thecard.id}>
                        <h5 className="card-title">{thecard.mushroom}</h5>
                        <p className="card-text">{thecard.weight}</p>
                        <p className="card-text">{thecard.username}</p>
                        <button>Go somewhere</button>
                    </div>
                </div>
            </div>
        );
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <div className="card" id="card-dried">
            <div className="name-page">
                <p><VscIcons.VscServerProcess />Weigh</p>
            </div>

            <div className="button">
                {/* <Button variant="success" disabled>
                    <AiIcons.AiFillPlusCircle /> Add new
                </Button> */}

                <Button variant="danger" >
                    Delete
                </Button>

                <Modal show={show} onHide={handleClose} size="lg" centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal add</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form className="form-input row g-3" autoComplete="off" onSubmit={onInputSubmit}>
                            <div className="col-md-12">
                                <label className="form-label">Mushroom</label>
                                <select className="col-md-4 form-select" name="mushroom" value={input.mushroom} onChange={onInputValueChange} required>
                                    <option value="">กรุณาเลือก*</option>
                                    <option value="เห็ด1">เห็ด1</option>
                                    <option value="เห็ด2">เห็ด2</option>
                                    <option value="เห็ด3">เห็ด3</option>
                                    <option value="เห็ด4">เห็ด4</option>
                                </select>
                            </div>

                            <div className="col-md-12">
                                <label className="form-label">weight</label>
                                <input type="number" className="form-control" name="weight" value={input.weight} onChange={onInputValueChange} maxLength="10" placeholder="Weight" required />
                            </div>

                            <div className="col-md-12">
                                <label className="form-label">Username</label>
                                <select className="form-select" name="username" value={input.username} onChange={onInputValueChange} required>
                                    <option value="">กรุณาเลือก*</option>
                                    <option value="นาย1">นาย 1</option>
                                    <option value="นาย2">นาย 2</option>
                                    <option value="นาย3">นาย 3</option>
                                    <option value="นาย4">นาย 4</option>
                                </select>
                            </div>
                            <Button variant="success" type="submit">
                                Save
                            </Button>
                            <Button variant="danger" onClick={handleClose}>
                                Close
                            </Button>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>

                    </Modal.Footer>
                </Modal>
                {/* <button type="button" className="btn btn-danger">Delete</button> */}
            </div>

            {/* <div className="nav nav-tabs">

                <div className="nav-item">
                <button class="nav-link">Drying</button>
                </div>

                <div className="nav-item">
                <button class="nav-link">Packing</button>
                </div>

                <div className="nav-item">
                    <p className="nav-link" >Weigh</p>
                </div>

                <div className="nav-item">
                    <p className="nav-link" >Warehouse</p>
                </div>

            </div> */}
            <NavTab />
            <div className="card" id="card-add-dried">
                
            <div className="column" >
                <div className="card list">
                    <div className="card-body">
                        <h5 className="card-title">ชื่อ:เห็ดเข็มทอง</h5>
                        <p className="card-text">ก่อนอบ นน.:1200</p>
                        <p className="card-text">หลังอบ นน.:1000</p>
                        <p className="card-text">จำนวน:100</p>
                        <p className="card-text">น้ำหนักสุทธิ:20</p>
                        <Button variant="success" onClick={handleShow}>
                    <AiIcons.AiFillPlusCircle /> Add new
                </Button>
                    </div>
                </div>
            </div>
               
            </div>

        </div>
        );
}

export default Weigh;