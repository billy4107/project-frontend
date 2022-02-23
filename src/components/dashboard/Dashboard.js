import { AiOutlineInbox } from "react-icons/ai";
import { GiMushroomGills } from "react-icons/gi";
import { FiAlertCircle } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./Dashboard.css";
import ChartSum from "./ChartSum";
import ChartPurchase from "./ChartPurchase";
import SumPersonnel from "./SumPersonnel";

const Dashboard = () => {

    const [freshList, setFreshList] = useState([]);
    const [WarehouseList, setWarehouseList] = useState([]);
    const [personnelList, setPersonnelList] = useState([]);

    useEffect(() => {
        getProduct();
    }, [])

    useEffect(() => {
        getWarehouse();
    }, [])

    useEffect(() => {
        getPersonnel();
    }, [])

    const getProduct = async () => {
        axios.get("http://localhost:3001/productfresh").then((response) => {
            setFreshList(response.data);
        });
    }

    const getWarehouse = async () => {
        axios.get("http://localhost:3001/warehouse").then((response) => {
            setWarehouseList(response.data);
        });
    }

    const getPersonnel = async () => {
        axios.get("http://localhost:3001/personnel").then((response) => {
            setPersonnelList(response.data);
        });
    }

    const sumproductfresh = freshList.length
    const sumwarehouse = WarehouseList.length
    let newDate = new Date().toISOString().split('T')[0]
    const exp = freshList.filter(explist => explist.expdate <= newDate), expCount = exp.length
    const sumpersonnel = personnelList.length


    return (
        <div>
            <div className="row row-cols-1 row-cols-md-4 g-4">

                <div className="col">
                    <div className="card border-dark mb-3" >
                        <div className="card-body text-dark row">
                            <div className="col-4">
                                <h1 className="imgmushroom"><GiMushroomGills /></h1>
                            </div>
                            <div className="col">
                                <p className="card-text textcount"> จำนวนรุ่นของเห็ด</p>
                                <p className="card-text textcount"> {sumproductfresh} รุ่น</p>
                            </div>
                        </div>
                        <div className="card-footer bg-transparent border-dark"><FaRegClock /> Updated on</div>
                    </div>
                </div>

                <div className="col">
                    <div className="card border-dark mb-3" >
                        <div className="card-body text-dark row">
                            <div className="col-4">
                                <h1 className="imgmushroom"><AiOutlineInbox /></h1>
                            </div>
                            <div className="col">
                                <p className="card-text textcount"> จำนวนสินค้าคงคลัง</p>
                                <p className="card-text textcount"> {sumwarehouse} รายการ</p>
                            </div>
                        </div>
                        <div className="card-footer bg-transparent border-dark"><FaRegClock /> Updated on</div>
                    </div>
                </div>

                <div className="col">
                    <div className="card border-dark mb-3" >
                        <div className="card-body text-dark row">
                            <div className="col-4">
                                <h1 className="imgmushroom"><FiAlertCircle /></h1>
                            </div>
                            <div className="col">
                                <p className="card-text textcount"> เห็ดที่จะหมดอายุ</p>
                                <p className="card-text textcount"> {expCount} รุ่น</p>
                            </div>
                        </div>
                        <div className="card-footer bg-transparent border-dark"><FaRegClock /> Updated on</div>
                    </div>
                </div>

                <div className="col">
                    <div className="card border-dark mb-3" >
                        <div className="card-body text-dark row">
                            <div className="col-4">
                                <h1 className="imgmushroom"><FaUserCircle /></h1>
                            </div>
                            <div className="col">
                                <p className="card-text textcount"> จำนวนพนักงานที่มี</p>
                                <p className="card-text textcount"> {sumpersonnel} คน</p>
                            </div>
                        </div>
                        <div className="card-footer bg-transparent border-dark"><FaRegClock /> Updated on</div>
                    </div>
                </div>

                    <div className="col-md-9">
                        <ChartSum />
                    </div>


                    <div className="col-md-3">
                        <SumPersonnel />
                    </div>

                    <div className="col-md-12">
                        <ChartPurchase />
                    </div>

            </div>
        </div>
    );
};

export default Dashboard;
