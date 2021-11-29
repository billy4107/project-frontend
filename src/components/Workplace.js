import { MockupData } from "./MockupData";
import * as GrIcons from "react-icons/gr";
import "./Workplace.css";

function Workplace() {
    return (
        <div className="card" id="card-workplace">
            <div className="name-page">
                <p> <GrIcons.GrUserWorker />Work Place</p>

            </div>

            <div className="button">
                <button type="button" class="btn btn-success">Add work</button>
                <button type="button" class="btn btn-danger">Delete</button>
            </div>

            <div className="nav nav-tabs">
                <div className="nav-item">
                    <p class="nav-link active" >Page</p>
                </div>
            </div>

            <div className="table-responsive">
                <table class="table table-hover table-bordered table-striped">
                    <thead class="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">workname</th>
                            <th scope="col">timein</th>
                            <th scope="col">timeout</th>
                            <th scope="col">username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {MockupData.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <th>{item.title}</th>
                                    <td>{item.workname}</td>
                                    <td>{item.timein}</td>
                                    <td>{item.timeout}</td>
                                    <td>{item.username}</td>
                                </tr>
                            );
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Workplace;