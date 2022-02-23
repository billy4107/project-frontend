import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router-dom";
import axios from 'axios';

const EditDried = (props) => {
    const { proid } = useParams();
    const [beforeweight, setBeforeweight] = useState('');
    const [afterweight, setAfterweight] = useState('');
    const { onEditCloseClick } = props

    const editProcessed = async (event) => {
            await axios.patch(`http://localhost:3001/processed/${proid}`, {
                beforeweight: beforeweight,
                afterweight: afterweight
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
                        <label className="form-label">Before Weight</label>
                        <input type="number" className="form-control" name="beforeweight"
                            onChange={(event) => setBeforeweight(event.target.value)} maxLength="10" placeholder="beforeweight" />
                    </div>

                    <div className="col-md-12">
                        <label className="form-label">After Weight</label>
                        <input type="number" className="form-control" name="afterweight"
                            onChange={(event) => setAfterweight(event.target.value)} maxLength="10" placeholder="afterweight" />
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

export default EditDried
