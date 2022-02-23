import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./StatusWarehouse.css";
import { AiOutlineInbox } from "react-icons/ai";

const StatusWarehouse = () => {

    const [WarehouseList, setWarehouseList] = useState([]);

    useEffect(() => {
        getWarehouse();
    }, [])

    const getWarehouse = async () => {
        axios.get("http://localhost:3001/warehouse").then((response) => {
            setWarehouseList(response.data);
        });
    }

    const sum = WarehouseList.length
    
    return (
        <div className="row">
            <div className="col-sm-6 statuscard">
                <div className="card primary">
                    <div className="card-body-status card-body row">

                        <div className="col-4">
                            <h2 className="imgstatus"><AiOutlineInbox /></h2>
                        </div>

                        <div className="col">
                            <h2 className="card-title">Total</h2>
                            <p className="card-text">{sum} รายการ</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default StatusWarehouse;