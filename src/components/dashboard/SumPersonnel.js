import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./SumPersonnel.css";

const SumPersonnel = () => {
  const [workplaceList, setWorkplaceList] = useState([]);

  useEffect(() => {
    getWorkplace();
  }, [])

  const getWorkplace = async () => {
    axios.get("http://localhost:3001/workplace").then((response) => {
      setWorkplaceList(response.data);
    });
  }

  const holder = {};
  workplaceList.forEach(function (d) {
    if (holder.hasOwnProperty(d.Personnel['name'])) {
      holder[d.Personnel['name']] = holder[d.Personnel['name']] + d.harvest;
    } else {
      holder[d.Personnel['name']] = d.harvest;
    }
  });

  const obj2 = [];
  for (var prop in holder) {
    obj2.push({ perid: prop, harvest: holder[prop] });
  }

  const workElements = obj2
    .map((workdata) =>
      <tr key={workdata.perid}>
        <td>{workdata.perid}</td>
        <td>{workdata.harvest}</td>
      </tr>
    )

  return (
    <div className="sumper">
      <div className="card border-dark mb-3" >
        <div className="card-body text-dark">
          <h3 className="mt-10">ยอดขาย</h3>
          <div className="table-responsive text-nowrap">
            <table className="table table-sm table-hover">
              <thead>
                <tr>
                  <th className='col' scope="col">Name</th>
                  <th className='col' scope="col">harvest</th>
                </tr>
              </thead>
              <tbody>
                {workElements}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SumPersonnel