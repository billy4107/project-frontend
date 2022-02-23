import React from 'react';
import { Link } from 'react-router-dom';
import "./ItemProduct.css";

const ItemProduct = (props) => {
    const { fdata, onTableOpenClick, deleteProduct, color } = props

    return (
        <tr style={{color: color}}>
            <td>  <button type="button" className="btn btn-sm btnTable" onClick={() => { onTableOpenClick(fdata) }}>View</button>

                <Link to={`/pagewarehouse/fresh/edit/${fdata.pfid}`} type="button" className="btn btn-sm btnTable"> Edit</Link>

                <button type="button" className="btn btn-sm btnTable" onClick={() => { deleteProduct(fdata.pfid) }}>Delete</button>

            </td>
            <td>{fdata.idproduct}</td>
            <td>{fdata.mushroomname}</td>
            <td>{fdata.amount}</td>
            <td>{fdata.partner}</td>
            <td>{new Date(fdata.importdate).toLocaleDateString("th-TH")}</td>
            <td >{new Date(fdata.expdate).toLocaleDateString("th-TH")}</td>
            <td>{new Date(fdata.createdAt).toLocaleString("th-TH")}</td>
        </tr>
    );
};

export default ItemProduct;
