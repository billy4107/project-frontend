import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Line } from "react-chartjs-2";
// import { Chart } from 'chart.js';
import 'chartjs-adapter-date-fns';
import 'chartjs-adapter-moment';

const ChartPurchase = () => {
    const [chartData, setChartData] = useState({});

    const chart = () => {
      let sellDate = [];
      let sellPrice = [];
      axios.get("http://localhost:3001/buymushroom")
        .then(res => {
          console.log(res);
          for (const dataObj of res.data) {
            sellDate.push((dataObj.createdAt));
            sellPrice.push(parseInt(dataObj.price));
          }
          setChartData({
            labels: sellDate,
            datasets: [
              {
                type: 'line',
                label: "รับซื้อ",
                data: sellPrice,
                borderColor: ["rgba(195, 53, 15, 0.6)"],
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
      console.log(sellDate, sellPrice);
    };
  
    useEffect(() => {
      chart();
    }, []);
    return (
      <div className="col col1">
        <div className="card border-dark mb-3" >
          <div className="card-body text-dark">
            <h3 className="mt-10">รับซื้อ</h3>
            <Line data={chartData} options={{
              responsive: true,
              // scales: {
              //   xAxes: [
              //     {
              //       type: 'time',
              //       time: {
              //           unit: 'week'
              //       }
              //     }
              //   ]
              // }
            }} />
          </div>
          {/* <div className="card-footer bg-transparent border-dark"><FaRegClock /> Updated on</div> */}
        </div>
      </div>
    );
  };

export default ChartPurchase;
