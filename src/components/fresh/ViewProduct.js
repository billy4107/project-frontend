import React from 'react';
import "./ViewProduct.css";

const ViewProduct = (props) => {
    const { fdata, onBgClick } = props;

    return (
        <div className="view-table">
            <div className="view-table-bg" onClick={onBgClick} />
            <div className="view-table-content">
                <div className="view-header">
                    <h3>View</h3>
                </div>
                <form className="view-from form-input row"  >

                    <div className="col columnview">
                        <label className="form-label col-md-12">ID product</label>
                        <input type="text" className="form-control" value={fdata.idproduct} disabled />
                    </div>

                    <div className="col columnview">
                        <label className="form-label col-md-12">Name</label>
                        <input type="text" className="form-control" value={fdata.mushroomname} disabled />
                    </div>

                    <div className="col columnview">
                        <label className="form-label col-md-12">Amount</label>
                        <input type="text" className="form-control" value={fdata.amount} disabled />
                    </div>

                    <div className="col columnview">
                        <label className="form-label col-md-12">Partner</label>
                        <input type="text" className="form-control" value={fdata.partner} disabled />
                    </div>

                    <div className="col columnview">
                        <label className="form-label col-md-12">Note</label>
                        <input type="text" className="form-control" value={fdata.note} disabled />
                    </div>

                    <div className="col columnview">
                        <label className="form-label col-md-12">Import date</label>
                        <input type="text" className="form-control" value={new Date(fdata.importdate).toLocaleDateString("th-TH")} disabled />
                    </div>

                    <div className="col columnview">
                        <label className="form-label col-md-12">Exp date</label>
                        <input type="text" className="form-control" value={new Date(fdata.expdate).toLocaleDateString("th-TH")} disabled />
                    </div>

                    <div className="col columnview">
                        <label className="form-label col-md-12">Create time</label>
                        <input type="text" className="form-control" value={new Date(fdata.createdAt).toLocaleString("th-TH")} disabled />
                    </div>

                    <div className="col columnview">
                        <label className="form-label col-md-12">Update time</label>
                        <input type="text" className="form-control" value={new Date(fdata.updatedAt).toLocaleString("th-TH")} disabled />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default ViewProduct;
