import React from 'react';
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';
import "./ItemMember.css";

const ItemMember = (props) => {
    const {memberdata, deleteMember} = props

    return (
        <tr>
            <td><Link to={`/member/view/${memberdata.fmid}`} type="button" className="btn btn-sm btnTable">View</Link>
                <Link to={`/member/edit/${memberdata.fmid}`} type="button" className="btn btn-sm btnTable">Edit</Link>
                <button type="button" className="btn btn-sm btnTable" onClick={() => {deleteMember(memberdata.fmid) }}>Delete</button>

            </td>
            <td>{memberdata.memberID}</td>
            <td>{memberdata.membername}</td>
            <td>{memberdata.idcard}</td>
            <td>{memberdata.phone}</td>
            <td>{memberdata.status ? <p className="active"><AiFillCheckCircle /></p> : <p className="disable"><AiFillCloseCircle /></p>}</td>
            <td>{new Date(memberdata.createdAt).toLocaleString("th-TH")}</td>
            <td>{new Date(memberdata.updatedAt).toLocaleString("th-TH")}</td>
        </tr>
    );
};

export default ItemMember;
