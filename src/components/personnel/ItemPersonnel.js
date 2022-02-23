import React from 'react';
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';

const ItemPersonnel = (props) => {
  const {personneldata, deletePersonnel} = props

  return (
    <tr>
      <td>
        <Link to={`/personnel/view/${personneldata.perid}`} type="button" className="btn btn-sm btnTable">View</Link>
        <Link to={`/personnel/edit/${personneldata.perid}`} type="button" className="btn btn-sm btnTable">Edit</Link>
        <button type="button" className="btn btn-sm btnTable" onClick={() => { deletePersonnel(personneldata.perid) }}>Delete</button>

      </td>
      <td>{personneldata.codename}</td>
      <td>{personneldata.name}</td>
      <td>{personneldata.phone}</td>
      <td>{personneldata.status ? <p className="active"><AiFillCheckCircle /></p> : <p className="disable"><AiFillCloseCircle /></p>}</td>
      <td>{new Date(personneldata.createdAt).toLocaleString("th-TH")}</td>
      <td>{new Date(personneldata.updatedAt).toLocaleString("th-TH")}</td>
    </tr>
  );};

export default ItemPersonnel;
