import axios from "axios";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import ItemPersonnel from './ItemPersonnel';
import SearchPersonnel from './SearchPersonnel';
import "./Personnel.css";

const Personnel = () => {
  const [personnelList, setPersonnelList] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    getPersonnel();
  }, [])

  const getPersonnel = async () => {
      axios.get("http://localhost:3001/personnel").then((response) => {
        setPersonnelList(response.data);
      });
  }

  const deletePersonnel = async (perid) => {
      const answer = window.confirm("are you sure?");
      if (answer) {
          await axios.delete(`http://localhost:3001/personnel/${perid}`);
          getPersonnel();
      }
  }

  const personnelPerPage = 10;
  const pagesVisited = pageNumber * personnelPerPage;

  const personnelElements = personnelList.filter((personneldata) => {
      return personneldata.name.includes(searchText)
  })
      .slice(pagesVisited, pagesVisited + personnelPerPage)
      .map((personneldata) => {
          // console.log(memberdata)
          return <ItemPersonnel key={personneldata.perid} personneldata={personneldata} deletePersonnel={deletePersonnel} />
      });
  const pageCount = Math.ceil(personnelList.length / personnelPerPage);

  const changePage = ({ selected }) => {
      setPageNumber(selected);
  };

  return (
      <div>
          <div className="name-page">
              <p>Personnel</p>
          </div>

          <div className="button">
              <Link to="/personnel/add">
                  <button type="button" className="btn btn-primary">Add personnel</button>
              </Link>
          </div>

          <SearchPersonnel value={searchText} onValueChange={setSearchText} />

          <div className="table-responsive text-nowrap">
              <table className="table table-sm table-hover">
                  <thead>
                      <tr>
                          <th className='col' scope="col">Action</th>
                          <th className='col' scope="col">IDname</th>
                          <th className='col' scope="col">name</th>
                          <th className='col' scope="col">Phone</th>
                          <th className='col' scope="col">Status</th>
                          <th className='col' scope="col">Create time</th>
                          <th className='col' scope="col">Update time</th>
                      </tr>
                  </thead>
                  <tbody>
                      {personnelElements}
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

export default Personnel;
