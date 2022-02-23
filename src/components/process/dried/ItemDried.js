import React from 'react'
import { Link } from 'react-router-dom'
import "./ItemDried.css"

const ItemDried = (props) => {
    const { thecard, deleteProcessed, setEdit, onSetPageAdd } = props

    return (
        <div className="column">
            <div className="card list">
                <div className="card-body">
                    <h5 className="card-title">ชื่อ: {thecard.mushroomname}</h5>
                    <p className="card-text">น้ำหนักคัดแยก: {thecard.sortingweight} กิโล</p>
                    <p className="card-text">น้ำหนักก่อนอบแห้ง: {thecard.beforeweight} กิโล</p>
                    <p className="card-text">น้ำหนักหลังอบแห้ง: {thecard.afterweight} กิโล</p>
                    <p className="card-text">จำนวน:  แพ็ค</p>
                    <p className="card-text">น้ำหนักสุทธิ:  กรัม</p>

                    <button type="button" className="btn btn-primary" onClick={() => { onSetPageAdd(thecard.proid) }} disabled={!thecard.beforeweight || !thecard.afterweight}>Submit</button>
                    <span> | </span>
                    <Link to={`/pageprocess/dried/${thecard.proid}`} type="button" className="btn btn-primary" onClick={() => { setEdit(thecard) }}>Insert</Link>
                    <span> | </span>
                    <button type="button" className="btn btn-danger" onClick={() => { deleteProcessed(thecard.proid) }}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default ItemDried;
