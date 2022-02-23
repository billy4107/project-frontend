import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router-dom";
import axios from 'axios';

const EditPacking = (props) => {
    const { proid } = useParams();
    const [quantity, setQuantity] = useState('');
    const [netweight, setNetweight] = useState('');
    const { onEditCloseClick } = props

    const editProcessed = async (event) => {
            await axios.patch(`http://localhost:3001/processed/${proid}`, {
                quantity: quantity,
                netweight: netweight
            });
    }

    return (
        <div className="view-table">
            <div className="view-table-bg" />
            <div className="view-table-content">
                <div className="view-header">
                    <h3>Edit</h3>
                </div>
                <form className="form-input row g-3" autoComplete="off" onClick={editProcessed}>

                    <div className="col-md-12">
                        <label className="form-label">Quantity</label>
                        <input type="number" className="form-control" name="Quantity"
                            onChange={(event) => setQuantity(event.target.value)} maxLength="10" placeholder="Quantity" />
                    </div>

                    <div className="col-md-12">
                        <label className="form-label">Net Weight</label>
                        <input type="number" className="form-control" name="Net Weight"
                            onChange={(event) => setNetweight(event.target.value)} maxLength="10" placeholder="Net Weight" />
                    </div>

                    <Button variant="primary" type="submit">
                        Save
                    </Button>
                    <Button variant="danger" onClick={onEditCloseClick}>
                        Close
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default EditPacking
