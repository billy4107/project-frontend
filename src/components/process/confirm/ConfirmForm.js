import "./ConfirmForm.css";
import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import NavTab from '../NavTab';
import axios from 'axios';
import * as FaIcons from "react-icons/fa";
import ReactPaginate from 'react-paginate';
import Itemconfirm from "./Itemconfirm";
import SearchConfirm from "./SearchConfirm";
import ViewConfirm from "./ViewConfirm";
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";

function ConfirmForm() {
    const [allCard, setAllCard] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [pageNumber, setPageNumber] = useState(0);
    const [selectedTable, setSelectedTable] = useState(null);

    const [, setName] = useState('');
    const [, setToken] = useState('');
    const [, setExpire] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        refreshToken();
    });

    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:3001/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        } catch (error) {
            if (error.response) {
                navigate("/");
            }
        }
    }

    const getAll = async () => {
        axios.get("http://localhost:3001/processed").then((response) => { setAllCard(response.data); });
    };

    useEffect(() => {
        getAll();
    }, []);

    const onTableOpenClick = (theTable) => setSelectedTable(theTable);
    const onTableCloseClick = () => setSelectedTable(null);

    let viewConfirm = null;
    if (!!selectedTable) {
        viewConfirm = <ViewConfirm thecard={selectedTable} onBgClick={onTableCloseClick} />
    }

    const confirmPerPage = 10;
    const pagesVisited = pageNumber * confirmPerPage;

    const cardElements = allCard
        .filter((thecard) => {
            return thecard.mushroomname.includes(searchText)
        })
        .filter(thecard => thecard.sid === 4)
        .slice(pagesVisited, pagesVisited + confirmPerPage)
        .map((thecard) => {
            // console.log(thecard)
            return <Itemconfirm key={thecard.proid} thecard={thecard} onTableOpenClick={onTableOpenClick} />
        })

    const pageCount = Math.ceil(allCard.length / confirmPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (

        <div>
            <div className="name-page">
                <p>Confirm</p>
            </div>

            <div className="button">
                <Button variant="primary" disabled>
                    <FaIcons.FaCogs /> Confirm
                </Button>
                #4
            </div>

            <NavTab />

            <SearchConfirm value={searchText} onValueChange={setSearchText} />

            <div className="table-responsive text-nowrap">
                <table className="table table-sm table-hover">
                    <thead>
                        <tr>
                            <th className='col' scope="col">Action</th>
                            <th className='col' scope="col">Mushroom Name</th>
                            <th className='col' scope="col">Sorting Weight</th>
                            <th className='col' scope="col">Before Weight</th>
                            <th className='col' scope="col">After Weight</th>
                            <th className='col' scope="col">Quantity</th>
                            <th className='col' scope="col">Net Weight</th>
                            <th className='col' scope="col">Create time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cardElements}
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
            {viewConfirm}
        </div>
    );
}

export default ConfirmForm;