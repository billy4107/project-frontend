import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Line } from "react-chartjs-2";
import 'chartjs-adapter-date-fns';
import 'chartjs-adapter-moment';

export const options = {
  response: true,
  scales: {
    x: {
      type: "time",
      time: {
        unit: "day"
      }
    }
  }
};

const ChartSum = () => {

  const [chartData, setChartData] = useState({});

  const chart = () => {
    let sellDate = [];
    let sellPrice = [];
    axios.get("http://localhost:3001/sellmushroom")
      .then(res => {
        // console.log(res);
        for (const dataObj of res.data) {
          sellDate.push(new Date(dataObj.createdAt).toLocaleString("th-TH"));
          sellPrice.push(parseInt(dataObj.price));
        }
        setChartData({
          labels: sellDate,
          datasets: [
            {
              type: 'line',
              label: "ยอดขาย",
              data: sellPrice,
              borderColor: ["rgba(75, 192, 192, 0.6)"],
              tension: 0,
              fill: false,
              pointStyle: 'rectRot',
              pointRadius: 5,
              pointBorderColor: 'rgb(0, 0, 0)'
            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
    // console.log(sellDate, sellPrice);
  };

  useEffect(() => {
    chart();
  }, []);


  return (
    <div className="col col1">
      <div className="card border-dark mb-3" >
        <div className="card-body text-dark">
          <h3 className="mt-10">ยอดขาย</h3>
          <Line options={options} data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default ChartSum;
