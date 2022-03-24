import React from 'react'

const Itemconfirm = (props) => {
        const { thecard, onTableOpenClick} = props

        return (
            <tr>
                <td><button type="button" className="btn btn-sm btnTable" onClick={() => { onTableOpenClick(thecard) }}> View</button>
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