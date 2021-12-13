import "./TableWarehouse.css";

function TableWarehouse() {
    return (
        <div className="card" id="card-workplace">
            <div className="name-page">
                <p> Work Place</p>
                {/* <GrIcons.GrUserWorker /> */}
            </div>

            <div className="button">
                {/* <Link to="/pageworkplace/pageformaddwork"> */}
                <button type="button" className="btn btn-success">Add work</button>
                {/* </Link> */}
                <button type="button" className="btn btn-danger">Delete</button>
            </div>

            <div className="nav nav-tabs">
                <div className="nav-item">
                    <p className="nav-link active" >Page</p>
                </div>
            </div>

            <div className="table-responsive">
                <table className="table table-hover ">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Mushroom</th>
                            <th scope="col">Weight</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">NetWeight</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>z;kdjfghsdjhg</td>
                        </tr>
                        {/* {MockupData.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <th>{item.title}</th>
                                    <td>{item.workname}</td>
                                    <td>{item.timein}</td>
                                    <td>{item.timeout}</td>
                                    <td>{item.username}</td>
                                </tr>
                            );
                        })} */}

                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TableWarehouse;