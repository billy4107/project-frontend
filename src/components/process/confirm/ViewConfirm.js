import React from 'react'
import "./ViewConfirm.css"

const ViewConfirm = (props) => {

    const { thecard, onBgClick } = props;

    return (
        <div className="view-table">
            <div className="view-table-bg" onClick={onBgClick} />
            <div className="view-table-content">
                <div className="view-header">
                    <h3>View</h3>
                </div>
                <form className="view-from form-input row"  >

                    <div className="col columnview">
                        <label className="form-label col-md-12">Mushroom Name</label>
                        <input type="text" className="form-control" value={thecard.mushroomname} disabled />
                    </div>

                    <div className="col columnview">
                        <label className="form-label col-md-12">Sorting Weight</label>
                        <input type="text" className="form-control" value={thecard.sortingweight} disabled />
                    </div>

                    <div className="col columnview">
                        <label className="form-label col-md-12">Before Weight</label>
                        <input type="text" className="form-control" value={thecard.beforeweight} disabled />
                    </div>

                    <div className="col columnview">
                        <label className="form-label col-md-12">After Weight</label>
                        <input type="text" className="form-control" value={thecard.afterweight} disabled />
                    </div>

                    <div className="col columnview">
                        <label className="form-label col-md-12">Quantity</label>
                        <input type="text" className="form-control" value={thecard.quantity} disabled />
                    </div>

                    <div className="col columnview">
                        <label className="form-label col-md-12">Net Weight</label>
                        <input type="text" className="form-control" value={thecard.netweight} disabled />
                    </div>

                    <div className="col columnview">
                        <label className="form-label col-md-12">Create time</label>
                        <input type="text" className="form-control" value={new Date(thecard.createdAt).toLocaleString("th-TH")} disabled />
                    </div>

                </form>
            </div>
        </div>
    );
}
export default ViewConfirm;
