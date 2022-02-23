import React from 'react';
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';

const ItemPartner = (props) => {
  const {partnerdata, deleteMember} = props

  return (
    <tr>
      <td>
        <Link to={`/partner/view/${partnerdata.pid}`} type="button" className="btn btn-sm btnTable">View</Link>
        <Link to={`/partner/edit/${partnerdata.pid}`} type="button" className="btn btn-sm btnTable">Edit</Link>
        <button type="button" className="btn btn-sm btnTable" onClick={() => { deleteMember(partnerdata.pid) }}>Delete</button>

      </td>
      <td>{partnerdata.partnerID}</td>
      <td>{partnerdata.partnername}</td>
      <td>{partnerdata.phone}</td>
      <td>{partnerdata.status ? <p className="active"><AiFillCheckCircle /></p> : <p className="disable"><AiFillCloseCircle /></p>}</td>
      <td>{new Date(partnerdata.createdAt).toLocaleString("th-TH")}</td>
      <td>{new Date(partnerdata.updatedAt).toLocaleString("th-TH")}</td>
    </tr>
  );
};

export default ItemPartner;
