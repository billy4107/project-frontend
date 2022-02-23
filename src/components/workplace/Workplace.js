import axios from 'axios';
import "./Workplace.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';
import ViewWorkplace from "./ViewWorkplace";
import ItemWorkplace from "./ItemWorkplace";
import SearchWorkplace from "./SearchWorkplace";

function Workplace() {

    //Data
    const [workplaceList, setWorkplaceList] = useState([]);

    //pagination
    const [pageNumber, setPageNumber] = useState(0);

    //view
    const [selectedTable, setSelectedTable] = useState(null);

    //search
    const [searchText, setSearchText] = useState('');

    const onTableOpenClick = (theTable) => setSelectedTable(theTable);
    const onTableCloseClick = () => setSelectedTable(null);

    let viewWorkplace = null;
    if (!!selectedTable) {
        viewWorkplace = <ViewWorkplace workdata={selectedTable} onBgClick={onTableCloseClick} />
    }

    //pagination and datatable
    const workPerPage = 10;
    const pagesVisited = pageNumber * workPerPage;

    useEffect(() => {
        getWorkplace();
    }, [])

    const getWorkplace = async () => {
        axios.get("http://localhost:3001/workplace").then((response) => {
            setWorkplaceList(response.data);
        });
    }

    const deleteWorkplace = async (wid) => {
        const answer = window.confirm("are you sure?");
        if (answer) {
            await axios.delete(`http://localhost:3001/workplace/${wid}`);
            getWorkplace();
        }
    }

    const workElements = workplaceList.filter((workdata) => {
        return workdata.worktype.includes(searchText)
    })
        .slice(pagesVisited, pagesVisited + workPerPage)
        .map((workdata) => {
            // console.log(workdata)
            return <ItemWorkplace key={workdata.wid} workdata={workdata} onTableOpenClick={onTableOpenClick} deleteWorkplace={deleteWorkplace} />
        });
    const pageCount = Math.ceil(workplaceList.length / workPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div>
            <div className="name-page">
                <p>Work Place</p>
            </div>

            <div className="button">
                <Link to="/pageworkplace/pageformaddwork">
                    <button type="button" className="btn btn-primary">Add work</button>
                </Link>
            </div>

            <SearchWorkplace value={searchText} onValueChange={setSearchText} />

            <div className="table-responsive text-nowrap">
                <table className="table table-sm table-hover">
                    <thead>
                        <tr>
                            <th className='col' scope="col">Action</th>
                            <th className='col' scope="col">Work name</th>
                            <th className='col' scope="col">Harvest</th>
                            <th className='col' scope="col">Damaged</th>
                            <th className='col' scope="col">Username</th>
                            <th className='col' scope="col">Create time</th>
                            <th className='col' scope="col">Update time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {workElements}
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
                    activeClassName={"paginationActive"}
                />
            </div>
            {viewWorkplace}
        </div>
    );
}

export default Workplace;