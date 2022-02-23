import React from 'react'
import { Link } from 'react-router-dom'
import "./ItemSort.css"

const ItemSort = (props) => {
    const { thecard, deleteProcessed, setEdit, onSetPageAdd } = props

    return (
        <div className="column">
            <div className="card list">
                <div className="card-body">
                    <h5 className="card-title">ชื่อ: {thecard.mushroomname}</h5>
                    <p className="card-text">น้ำหนักคัดแยก: {thecard.sortingweight} กิโล</p>
                    <p className="card-text">น้ำหนักก่อนอบแห้ง:  กิโล</p>
                    <p className="card-text">น้ำหนักหลังอบแห้ง:  กิโล</p>
                    <p className="card-text">จำนวน:  แพ็ค</p>
                    <p className="card-text">น้ำหนักสุทธิ:  กรัม</p>

                    <button type="button" className="btn btn-primary" onClick={() => {onSetPageAdd(thecard.proid)}}>Submit</button>
                    <span> | </span>
                    <Link to={`/pageprocess/sorting/${thecard.proid}`} type="button" className="btn btn-primary" onClick={() => {setEdit(thecard)}}>Edit</Link>
                    <span> | </span>
                    <button type="button" className="btn btn-danger" onClick={() => {deleteProcessed(thecard.proid)}}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default ItemSort;
