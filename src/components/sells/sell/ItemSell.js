import React from 'react';
import { Link } from 'react-router-dom';

const ItemSell = (props) => {
  const { sdata, deleteMember } = props

  return (
      <tr>
          <td>
              <Link to={`/sellmushroom/view/${sdata.sellid}`} type="button" className="btn btn-sm btnTable"> View</Link>
              {/* <Link to={`/sellmushroom/edit/${sdata.sellid}`} type="button" className="btn btn-sm btnTable"> Edit</Link> */}
              <button type="button" className="btn btn-sm btnTable" onClick={() => { deleteMember(sdata.sellid) }}>Delete</button>
          </td>
          <td>{sdata.numbersell}</td>
          <td>{sdata.mushroomname}</td>
          <td>{sdata.amount}</td>
          <td>{sdata.price}</td>
          <td>{sdata.Partner['partnername']}</td>
          <td>{new Date(sdata.createdAt).toLocaleString("th-TH")}</td>
      </tr>
  );
};

export default ItemSell;
