import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import "./BuyMushroom.css";
import ItemBuy from './ItemBuy';
import SearchBuy from './SearchBuy';
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";

const BuyMushroom = () => {
    const [buyList, setBuyList] = useState([]);
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

    const WarehousePerPage = 10;
    const pagesVisited = pageNumber * WarehousePerPage;

    useEffect(() => {
        getBuy();
    }, [])

    const getBuy = async () => {
        axios.get("http://localhost:3001/buymushroom").then((response) => {
            console.log(response)
            setBuyList(response.data);
        });
    }

    const deleteMember = async (fmid) => {
        const answer = window.confirm("are you sure?");
        if (answer) {
            await axios.delete(`http://localhost:3001/buymushroom/${fmid}`);
            getBuy();
        }
    }

    const buyElements = buyList
        .filter((bdata) => {
            return bdata.mushroomname.includes(searchText)
        })
        .slice(pagesVisited, pagesVisited + WarehousePerPage)
        .map((bdata) => {
            console.log(bdata)
            return <ItemBuy key={bdata.buyid} bdata={bdata} deleteMember={deleteMember} />
        });

    const pageCount = Math.ceil(buyList.length / WarehousePerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div>
            <div className="name-page">
                <p>Buy</p>
            </div>

            <div className="button">
                <Link to="/buymushroom/add">
                    <button type="button" className="btn btn-primary">Add buy</button>
                </Link>
            </div>

            <SearchBuy value={searchText} onValueChange={setSearchText} />

            <div className="table-responsive text-nowrap">
                <table className="table table-sm table-hover">
                    <thead>
                        <tr>
                            <th className='col' scope="col">Action</th>
                            <th className='col' scope="col">Number</th>
                            <th className='col' scope="col">Mushroom name</th>
                            <th className='col' scope="col">Amount</th>
                            <th className='col' scope="col">Price</th>
                            <th className='col' scope="col">By name</th>
                            <th className='col' scope="col">Create time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {buyElements}
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

export default BuyMushroom;
