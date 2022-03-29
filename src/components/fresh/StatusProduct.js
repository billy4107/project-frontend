import React, { useEffect, useState } from 'react';
import "./StatusProduct.css"
import { GiMushroomGills } from "react-icons/gi";
import { FiAlertCircle } from "react-icons/fi";
import axios from 'axios';

const StatusProduct = () => {

    const [freshList, setFreshList] = useState([]);

    useEffect(() => {
        getProduct();
    }, [])

    const getProduct = async () => {
        axios.get("http://localhost:3001/productfresh").then((response) => {
            setFreshList(response.data);
        });
    }

    const sum = freshList.reduce((previousValue, currentValue) => previousValue + currentValue.amount
        , 0)

    let newDate = new Date().toISOString().split('T')[0]
    // console.log(newDate)
    const exp = freshList.filter(explist => explist.expdate <= newDate), expCount = exp.length
    // console.log(exp)

    return (
        <div className="row">
            <div className="col-sm-6 statuscard">
                <div className="card primary">
                    <div className="card-body-status card-body row">

                        <div className="col-4">
                            <h2 className="imgstatus"><GiMushroomGills /></h2>
                        </div>

                        <div className="col">
                            <h2 className="card-title">Total</h2>
                            <p className="card-text">{sum} ก้อน</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="col-sm-6 statuscard">
                <div className="card danger">
                    <div className="card-body-status card-body row">

                        <div className="col-4">
                            <h2 className="imgstatus"><FiAlertCircle /></h2>
                        </div>

                        <div className="col">
                            <h2 className="card-title">Expired </h2>
                            <p className="card-text">{expCount} รุ่น</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default StatusProduct;
