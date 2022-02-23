import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import ItemMember from './ItemMember';
import "./Member.css";
import SearchMember from './SearchMember';

const Member = () => {

    const [memberList, setMemberList] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        getMember();
    }, [])

    const getMember = async () => {
        axios.get("http://localhost:3001/farmmember").then((response) => {
            setMemberList(response.data);
        });
    }

    const deleteMember = async (fmid) => {
        const answer = window.confirm("are you sure?");
        if (answer) {
            await axios.delete(`http://localhost:3001/farmmember/${fmid}`);
            getMember();
        }
    }

    const memberPerPage = 10;
    const pagesVisited = pageNumber * memberPerPage;

    const memberElements = memberList.filter((memberdata) => {
        return memberdata.membername.includes(searchText)
    })
        .slice(pagesVisited, pagesVisited + memberPerPage)
        .map((memberdata) => {
            // console.log(memberdata)
            return <ItemMember key={memberdata.fmid} memberdata={memberdata} deleteMember={deleteMember} />
        });
    const pageCount = Math.ceil(memberList.length / memberPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div>
            <div className="name-page">
                <p>Member</p>
            </div>

            <div className="button">
                <Link to="/member/add">
                    <button type="button" className="btn btn-primary">Add member</button>
                </Link>
            </div>

            <SearchMember value={searchText} onValueChange={setSearchText} />

            <div className="table-responsive text-nowrap">
                <table className="table table-sm table-hover">
                    <thead>
                        <tr>
                            <th className='col' scope="col">Action</th>
                            <th className='col' scope="col">memberID</th>
                            <th className='col' scope="col">Member name</th>
                            <th className='col' scope="col">ID card</th>
                            <th className='col' scope="col">Phone</th>
                            <th className='col' scope="col">Status</th>
                            <th className='col' scope="col">Create time</th>
                            <th className='col' scope="col">Update time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {memberElements}
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

export default Member;
