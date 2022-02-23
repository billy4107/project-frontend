import React from 'react';
import { Link } from 'react-router-dom';

const ItemBuy = (props) => {
    const { bdata, deleteMember } = props

    return (
        <tr>
            <td>
                <Link to={`/buymushroom/view/${bdata.buyid}`} type="button" className="btn btn-sm btnTable"> View</Link>
                <Link to={`/buymushroom/edit/${bdata.buyid}`} type="button" className="btn btn-sm btnTable"> Edit</Link>
                <button type="button" className="btn btn-sm btnTable" onClick={() => { deleteMember(bdata.buyid) }}>Delete</button>
            </td>
            <td>{bdata.numberbuy}</td>
            <td>{bdata.mushroomname}</td>
            <td>{bdata.amount}</td>
            <td>{bdata.price}</td>
            <td>{bdata.Farmmember['membername']}</td>
            <td>{new Date(bdata.createdAt).toLocaleString("th-TH")}</td>
        </tr>
    );
};

export default ItemBuy;
