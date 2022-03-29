import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import ItemPartner from './ItemPartner';
import { Link } from 'react-router-dom';
import SearchPartner from './SearchPartner';
import "./Partner.css";
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import {confirm} from 'react-bootstrap-confirmation';

const Partner = () => {
    const [partnerList, setPartnerList] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [pageNumber, setPageNumber] = useState(0);

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

    useEffect(() => {
        getPartner();
    }, [])

    const getPartner = async () => {
        axios.get("http://localhost:3001/partner").then((response) => {
            setPartnerList(response.data);
        });
    }

    const deleteMember = async (pid) => {
        const answer = await confirm("are you sure?");
        if (answer) {
            await axios.delete(`http://localhost:3001/partner/${pid}`);
            getPartner();
        }
    }

    const memberPerPage = 10;
    const pagesVisited = pageNumber * memberPerPage;

    const partnerElements = partnerList.filter((partnerdata) => {
        return partnerdata.partnername.includes(searchText)
    })
        .slice(pagesVisited, pagesVisited + memberPerPage)
        .map((partnerdata) => {
            // console.log(memberdata)
            return <ItemPartner key={partnerdata.pid} partnerdata={partnerdata} deleteMember={deleteMember} />
        });
    const pageCount = Math.ceil(partnerList.length / memberPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div>
            <div className="name-page">
                <p>Partner</p>
            </div>

            <div className="button">
                <Link to="/partner/add">
                    <button type="button" className="btn btn-primary">Add partner</button>
                </Link>
            </div>

            <SearchPartner value={searchText} onValueChange={setSearchText} />

            <div className="table-responsive text-nowrap">
                <table className="table table-sm table-hover">
                    <thead>
                        <tr>
                            <th className='col' scope="col">Action</th>
                            <th className='col' scope="col">partnerID</th>
                            <th className='col' scope="col">Partner name</th>
                            <th className='col' scope="col">Phone</th>
                            <th className='col' scope="col">Status</th>
                            <th className='col' scope="col">Create time</th>
                            <th className='col' scope="col">Update time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {partnerElements}
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
        </div>
    );
};

export default Partner;
