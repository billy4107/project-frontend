import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router-dom";
import axios from 'axios';

const EditSorting = (props) => {
    const { proid } = useParams();
    const [mushroomname, setMushroomname] = useState('');
    const [sortingweight, setSortingweight] = useState('');
    const { onEditCloseClick } = props
    useEffect(() => {
        if (proid) {
            getProcessedById(proid)
        }
    }, [proid])

   const editProcessed = async (event) => {
        if ((sortingweight !== "")) {
            await axios.patch(`http://localhost:3001/processed/${proid}`, {
                mushroomname: mushroomname,
                sortingweight: sortingweight
        });
        } else {
            alert("กรุณากรอกข้อมูลให้ครบถ้วน");
        }
    }

    const getProcessedById = async (proid) => {
        const response = await axios.get(`http://localhost:3001/processed/${proid}`);
        console.log(response);
        setMushroomname(response.data.mushroomname);
        setSortingweight(response.data.sortingweight);
    };
    return (
        <div className="view-table">
            <div className="view-table-bg"  />
            <div className="view-table-content">
                <div className="view-header">
                    <h3>Edit</h3>
                </div>
                <form className="form-input row g-3" autoComplete="off" onClick={editProcessed}>

                    <div className="col-md-12">
                        <label className="form-label">Mushroom</label>
                        <select className="col-md-4 form-select" name="mushroom" value={mushroomname}
                            onChange={(event) => setMushroomname(event.target.value)}>
                            <option value="">กรุณาเลือก*</option>
                            <option value="เห็ด1">เห็ด1</option>
                            <option value="เห็ด2">เห็ด2</option>
                            <option value="เห็ด3">เห็ด3</option>
                            <option value="เห็ด4">เห็ด4</option>
                        </select>
                    </div>

                    <div className="col-md-12">
                        <label className="form-label">weight</label>
                        <input type="number" className="form-control" name="weightSorting"
                            value={sortingweight}
                            onChange={(event) => setSortingweight(event.target.value)} maxLength="10" placeholder="Weight" />
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

export default EditSorting
