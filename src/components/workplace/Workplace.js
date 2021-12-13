import { MockupData } from "../../data/MockupData";
// import * as GrIcons from "react-icons/gr";
import { HiSearch } from "react-icons/hi";
import { MdDeleteForever } from "react-icons/md";
import "./Workplace.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import ReactPaginate from 'react-paginate';
import ViewWorkplace from "./ViewWorkplace";

function Workplace() {
    // const [Mockup, setMockup] = useState(MockupData.slice(0, 200));
    const [pageNumber, setPageNumber] = useState(0);
    const [selectedTable, setSelectedTable] = useState(MockupData[2]);

    let viewWorkplace = null;
    if (!!selectedTable) {
        viewWorkplace = <ViewWorkplace />
    }

    const mockupPerPage = 10;
    const pagesVisited = pageNumber * mockupPerPage;

    const displayUsers = MockupData
        .slice(pagesVisited, pagesVisited + mockupPerPage)
        .map((mockups, index) => {
            // console.log(index)
            return (
                <tr >
                    <td><button type="button" className="btn btn-info btn-sm btnTable"> <HiSearch /> </button>
                        <button type="button" className="btn btn-danger btn-sm btnTable"> <MdDeleteForever /> </button></td>
                    <td>{mockups.workname}</td>
                    <td>{mockups.timein}</td>
                    <td>{mockups.timeout}</td>
                    <td>{mockups.username}</td>
                </tr>
            );
        });

    const pageCount = Math.ceil(MockupData.length / mockupPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div className="card" id="card-workplace">
            <div className="name-page">
                <p>Work Place</p>

            </div>

            <div className="input-group mb-2 mt-2 w-25">
                <input type="text" className="form-control" placeholder="Search..." aria-label="Username" aria-describedby="basic-addon1" />
                <button type="button" className="btn btn-primary">Search</button>
            </div>

            <div className="button">
                <Link to="/pageworkplace/pageformaddwork">
                    <button type="button" className="btn btn-primary">Add work</button>
                </Link>
            </div>

            <div className="table-responsive">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Action</th>
                            <th scope="col">Work name</th>
                            <th scope="col">Time in</th>
                            <th scope="col">Time out</th>
                            <th scope="col">Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayUsers}
                    </tbody>
                </table>
            </div>
            <div className="thepagination">
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    //    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />
            </div>
            {viewWorkplace}
        </div>
    );
}

export default Workplace;