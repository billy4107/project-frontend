import "./ItemWorkplace.css";
import { Link } from "react-router-dom";
import React from 'react'

function ItemWorkplace(props) {
    const { workdata, onTableOpenClick, deleteWorkplace } = props

    return (
        <tr>
            <td><button type="button" className="btn btn-sm btnTable" onClick={() => { onTableOpenClick(workdata) }}>View</button>
            
                <Link to={`/pageworkplace/edit/${workdata.wid}`} type="button" className="btn btn-sm btnTable">Edit</Link>
            
                <button type="button" className="btn btn-sm btnTable" onClick={() => { deleteWorkplace(workdata.wid) }}>Delete</button>

            </td>
            <td>{workdata.worktype}</td>
            <td>{workdata.harvest}</td>
            <td>{workdata.damaged}</td>
            <td>{workdata.Personnel['name']}</td>
            <td>{new Date(workdata.createdAt).toLocaleString("th-TH")}</td>
            <td>{new Date(workdata.updatedAt).toLocaleString("th-TH")}</td>
        </tr>
    );
}

export default ItemWorkplace
