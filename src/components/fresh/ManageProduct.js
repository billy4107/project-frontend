import './ManageProduct.css'
import React, { useEffect, useState } from 'react'
import StatusProduct from './StatusProduct'
import axios from 'axios'
import ItemProduct from './ItemProduct'
import ReactPaginate from 'react-paginate'
import SearchProduct from './SearchProduct'
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import {confirm} from 'react-bootstrap-confirmation';

const ManageProduct = () => {

    const [freshList, setFreshList] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [searchText, setSearchText] = useState('');

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

    const getProduct = async () => {
        axios.get("http://localhost:3001/productfresh").then((response) => {
            setFreshList(response.data);
        });
    }

    const deleteProduct = async (pfid) => {
        const answer = await confirm("are you sure?");
        if (answer) {
            await axios.delete(`http://localhost:3001/productfresh/${pfid}`);
            getProduct();
        }
    }

    useEffect(() => {
        getProduct();
    }, [])

    const workPerPage = 10;
    const pagesVisited = pageNumber * workPerPage;

    const freshElements = freshList
        .filter((fdata) => {
            return fdata.mushroomname.includes(searchText)
        })
        .slice(pagesVisited, pagesVisited + workPerPage)
        .map((fdata) => {
            // console.log(workdata)
            let newDate = new Date().toISOString().split('T')[0]
            let color = (fdata.expdate <= newDate ? 'red' : '');
            return <ItemProduct key={fdata.pfid} fdata={fdata} deleteProduct={deleteProduct} color={color} />
        });


    const pageCount = Math.ceil(freshList.length / workPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div>
            <div className="name-page">
                <p>Manage Product</p>
            </div>

            <StatusProduct />

            <SearchProduct value={searchText} onValueChange={setSearchText} />

            <div className="table-responsive text-nowrap">
                <table className="table table-sm table-hover">
                    <thead>
                        <tr>
                            <th className='col' scope="col">Action</th>
                            <th className='col' scope="col">ID product</th>
                            <th className='col' scope="col">Name</th>
                            <th className='col' scope="col">Amount</th>
                            <th className='col' scope="col">Partner</th>
                            <th className='col' scope="col">Import date</th>
                            <th className='col' scope="col">Exp date</th>
                            <th className='col' scope="col">Create time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {freshElements}
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
        </div >
    )
}

export default ManageProduct
