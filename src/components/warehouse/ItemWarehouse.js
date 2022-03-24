import React from 'react';
import { Link } from 'react-router-dom';

const ItemWarehouse = (props) => {
    const { wdata, deleteWarehouse } = props

    return (
        <tr>
            <td><Link to={`/warehouse/view/${wdata.wareid}`} type="button" className="btn btn-sm btnTable">View</Link>
                <Link to={`/warehouse/edit/${wdata.wareid}`} type="button" className="btn btn-sm btnTable"> Edit</Link>
                <button type="button" className="btn btn-sm btnTable" onClick={() => { deleteWarehouse(wdata.wareid) }}>Delete</button>
            </td>
            <td>{wdata.mushroomname}</td>
            <td>{wdata.quantity}</td>
            <td>{wdata.netweight}</td>
            <td>{new Date(wdata.createdAt).toLocaleDateString("th-TH")}</td>
            <td>{new Date(wdata.updatedAt).toLocaleDateString("th-TH")}</td>
        </tr>
    );
};

export default ItemWarehouse;
