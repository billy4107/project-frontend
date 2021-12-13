import "./ViewWorkplace.css";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import React, { useState } from "react";

const ViewWorkplace = (props) => {

    const [show, setShow] = useState(false);

    const  { mockups } = props;
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
        
    return (
        <>
            <Modal show={show} onHide={handleClose} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>Modal add</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className="form-input row g-3" autoComplete="off" >

                    <div className="col-md-12">
                        <label className="form-label">Work name</label>
                        <input type="number" className="form-control" value={mockups.workname}/>
                    </div>

                    <div className="col-md-12">
                        <label className="form-label">Time in</label>
                        <input type="number" className="form-control" value={mockups.timein}/>
                    </div>

                    <div className="col-md-12">
                        <label className="form-label">Time out</label>
                        <input type="number" className="form-control" value={mockups.timeout}/>
                    </div>

                    <div className="col-md-12">
                        <label className="form-label">Username</label>
                        <input type="number" className="form-control" value={mockups.username}/>
                    </div>

                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                </form>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default ViewWorkplace;