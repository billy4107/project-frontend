import React from 'react'
import { Link } from 'react-router-dom';

const Itemconfirm = (props) => {
        const { thecard, onTableOpenClick, onTableSubmitOpenClick} = props

        return (
            <tr>
                <td><button type="button" className="btn btn-sm btnTable" onClick={() => { onTableOpenClick(thecard) }}> View</button>
                <Link to={`/pageprocess/confirmform/${thecard.proid}`} type="button" className="btn btn-sm btnTable" onClick={() => { onTableSubmitOpenClick(thecard) }}>Submit</Link>
                </td>
                <td>{thecard.mushroomname}</td>
                <td>{thecard.sortingweight}</td>
                <td>{thecard.beforeweight}</td>
                <td>{thecard.afterweight}</td>
                <td>{thecard.quantity}</td>
                <td>{thecard.netweight}</td>
                <td>{new Date(thecard.createdAt).toLocaleString("th-TH")} </td>
            </tr>
        ); 
}

export default Itemconfirm;