import "./Printing.css";
import React from "react";
import Button from 'react-bootstrap/Button';
import * as VscIcons from 'react-icons/vsc';
import NavTab from './NavTab';
import { MockupPrinting } from "../../data/MockupPrinting";

function Printing() {
    return (

        <div className="card" id="card-dried"> 
            <div className="name-page">
                <p><VscIcons.VscServerProcess />Printing</p>
            </div>

            <div className="button">
                <Button variant="danger" disabled>
                    Delete
                </Button>
            </div>

            <NavTab />

            <div className="card" id="card-add-dried">

                <div className="table-responsive">
                    <table className="table table-hover table-bordered table-striped">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">WeightBefore</th>
                                <th scope="col">WeightAfter</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">NetWeight</th>
                            </tr>
                        </thead>
                        <tbody>
                            {MockupPrinting.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <th>{item.mushroomName}</th>
                                        <td>{item.weightBefore}</td>
                                        <td>{item.weightAfter}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.netWeight}</td>
                                    </tr>
                                );
                            })}

                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    );
}

export default Printing;