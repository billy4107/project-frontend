import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import SearchWarehouse from '../../warehouse/SearchWarehouse';
// import TableProduct from './TableProduct';

const AddSell = () => {
  const [partnerList, setPartnerList] = useState([]);
  const [mushroomname, setMushroomname] = useState('');
  const [amount, setAmount] = useState('');
  const [price, setPrice] = useState('');
  const [pid, setPid] = useState('');
  const [wareid, setWareid] = useState('');
  const [warehouseList, setWarehouseList] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    getWarehouse();
  }, [])

  const getWarehouse = async () => {
    axios.get("http://localhost:3001/warehouse").then((response) => {
      setWarehouseList(response.data);
    });
  }

  function setWarehouse(ware,name) {
      setWareid(ware)
      setMushroomname(name)
  }

  const WarehousePerPage = 5;
  const pagesVisited = pageNumber * WarehousePerPage;

  const WarehouseElements = warehouseList
    .filter((wdata) => {
      return wdata.mushroomname.includes(searchText)
    })
    .slice(pagesVisited, pagesVisited + WarehousePerPage)
    .map((wdata) => {
      // console.log(workdata)
      return <tr key={wdata.wareid}>
      <td><button type="button" className="btn btn-sm btnTable" onClick={() => {setWarehouse(wdata.wareid,wdata.mushroomname)}} >select</button>
      </td>
      <td>{wdata.code}</td>
      <td>{wdata.mushroomname}</td>
      <td>{wdata.quantity}</td>
      <td>{wdata.netweight}</td>
      <td>{new Date(wdata.createdAt).toLocaleDateString("th-TH")}</td>
  </tr>
    });
  const pageCount = Math.ceil(warehouseList.length / WarehousePerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    getPartner();
  }, [])

  const addSell = async (event) => {
    event.preventDefault();
    await axios.post("http://localhost:3001/sellmushroom", {
      mushroomname: mushroomname,
      amount: amount,
      price: price,
      pid: pid,
      wareid: wareid
    });
    // window.location.assign("/sellmushroom")
  }

  const getPartner = async () => {
    axios.get("http://localhost:3001/partner/status").then((response) => {
      setPartnerList(response.data);
    });
  }

  const partnerElements = partnerList.map((partnerdata) => {
    return <option key={partnerdata.pid} value={partnerdata.pid}>{partnerdata.partnername}</option>;
  });

  return (
    <div>
      <div className="name-page">
        <p>New Buy</p>
      </div>
      <form className="form-input row g-3" autoComplete="off" onSubmit={addSell} >
        
      <SearchWarehouse value={searchText} onValueChange={setSearchText} />

        <table className="table table-sm table-hover ">
          <thead>
            <tr>
              <th className='col' scope="col">Action</th>
              <th className='col' scope="col">Code</th>
              <th className='col' scope="col">Name</th>
              <th className='col' scope="col">Quantity</th>
              <th className='col' scope="col">Net weight</th>
              <th className='col' scope="col">Create time</th>
            </tr>
          </thead>
          <tbody>
            {WarehouseElements}
          </tbody>
        </table>
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
      </form >

      <form className="form-input row g-3" autoComplete="off" onSubmit={addSell} >
        <div className="col-md-6">
          <label className="form-label"><b>ID</b></label>
          <input type="text" className="form-control" value={wareid} onChange={(event) => { setWareid(event.target.value) }} required disabled />
        </div>

        <div className="col-md-6">
          <label className="form-label"><b>Mushroom name</b></label>
          <input type="text" className="form-control" value={mushroomname} onChange={(event) => { setMushroomname(event.target.value) }} required disabled />
        </div>

        <div className="col-md-6">
          <label className="form-label"><b>Amount</b></label>
          <input type="number" className="form-control" maxLength="10" onChange={(event) => { setAmount(event.target.value) }} required />
        </div>

        <div className="col-md-6">
          <label className="form-label"><b>price</b></label>
          <input type="number" className="form-control" maxLength="10" onChange={(event) => { setPrice(event.target.value) }} required />
        </div>

        <div className="col-md-6">
          <label className="form-label"><b>By name</b></label>
          <select className="form-select" onChange={(event) => { setPid(event.target.value) }} required>
            <option value="">กรุณาเลือก*</option>
            {partnerElements}
          </select>
        </div>

        <div className="button-add col-12">
          <button type="submit" className="btn btn-primary">Submit</button>

          <Link to="/sellmushroom" type="button" className="btn btn-danger">Back</Link>
        </div>

      </form>
    </div >
  );
};


export default AddSell;
