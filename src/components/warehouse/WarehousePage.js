import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import ItemWarehouse from './ItemWarehouse';
import StatusWarehouse from './StatusWarehouse';
import SearchWarehouse from './SearchWarehouse';
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";

const WarehousePage = () => {

    const [WarehouseList, setWarehouseList] = useState([]);
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
        getWarehouse();
    }, [])

    const getWarehouse = async () => {
        axios.get("http://localhost:3001/warehouse").then((response) => {
            setWarehouseList(response.data);
        });
    }

    const deleteWarehouse = async (wareid) => {
        const answer = window.confirm("are you sure?");
        if (answer) {
            await axios.delete(`http://localhost:3001/warehouse/${wareid}`);
            getWarehouse();
        }
    }


    const WarehousePerPage = 10;
    const pagesVisited = pageNumber * WarehousePerPage;

    const WarehouseElements = WarehouseList
        .filter((wdata) => {
            return wdata.mushroomname.includes(searchText)
        })
        .slice(pagesVisited, pagesVisited + WarehousePerPage)
        .map((wdata) => {
            // console.log(workdata)
            return <ItemWarehouse key={wdata.wareid} wdata={wdata} deleteWarehouse={deleteWarehouse} />
        });

    const pageCount = Math.ceil(WarehouseList.length / WarehousePerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };
    return (
        <div>
            <div className="name-page">
                <p>Warehouse</p>
            </div>

            <StatusWarehouse />

            <SearchWarehouse value={searchText} onValueChange={setSearchText} />

            <div className="table-responsive text-nowrap">
                <table className="table table-sm table-hover">
                    <thead>
                        <tr>
                            <th className='col' scope="col">Action</th>
                            <th className='col' scope="col">Name</th>
                            <th className='col' scope="col">Quantity</th>
                            <th className='col' scope="col">Net weight</th>
                            <th className='col' scope="col">Create time</th>
                            <th className='col' scope="col">Update time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {WarehouseElements}
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

export default WarehousePage;
