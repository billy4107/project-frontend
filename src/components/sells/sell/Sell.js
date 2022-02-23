import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import SearchSell from './SearchSell';
import ItemSell from './ItemSell';

const Sell = () => {
  const [sellList, setSellList] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    getSell();
  }, [])

  const getSell = async () => {
    axios.get("http://localhost:3001/sellmushroom").then((response) => {
      console.log(response)
      setSellList(response.data);
    });
  }

  const deleteMember = async (sellid) => {
    const answer = window.confirm("are you sure?");
    if (answer) {
      await axios.delete(`http://localhost:3001/sellmushroom/${sellid}`);
      getSell();
    }
  }

  const WarehousePerPage = 10;
  const pagesVisited = pageNumber * WarehousePerPage;

  const sellElements = sellList
    .filter((sdata) => {
      return sdata.mushroomname.includes(searchText)
    })
    .slice(pagesVisited, pagesVisited + WarehousePerPage)
    .map((sdata) => {
      console.log(sdata)
      return <ItemSell key={sdata.sellid} sdata={sdata} deleteMember={deleteMember} />
    });

  const pageCount = Math.ceil(sellList.length / WarehousePerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <div className="name-page">
        <p>Sell</p>
      </div>

      <div className="button">
        <Link to="/sellmushroom/add">
          <button type="button" className="btn btn-primary">Add Sell</button>
        </Link>
      </div>

      <SearchSell value={searchText} onValueChange={setSearchText} />

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
            {sellElements}
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

export default Sell;
