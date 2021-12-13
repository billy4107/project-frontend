import "./FormAddWork.css"
import * as AiIcons from "react-icons/ai";

function FormAddWork() {

    return (
        <div className="card" id="card-add">
            <div className="name-page">
                <p><AiIcons.AiFillFileAdd /> New Work</p>

            </div>

            <div className="nav nav-tabs">
                <div className="nav-item">
                    <h4 className="nav-link active" >Details</h4>
                </div>
            </div>

            <form className="form-input row g-3" autoComplete="off">

                <div className="col-md-4">
                    <label htmlFor="validationDefault02" className="form-label">Work type</label>
                    <select className="col-md-4 form-select" required aria-label="select example">
                        <option value="">กรุณาเลือก*</option>
                        <option value="1">เก็บผลผลิต</option>
                        <option value="2">ดูแล/ให้ยา</option>
                        <option value="3">ทำความสะอาด</option>
                        <option value="4">ตรวจเช็ค</option>
                    </select>
                </div>

                <div className="col-md-4">
                    <label htmlFor="harvest" className="form-label">Harvest</label>
                    <input type="number" className="form-control" id="harvest" maxLength="10" required />
                </div>

                <div className="col-md-4">
                    <label htmlFor="damaged" className="form-label">Damaged</label>
                    <div className="input-group">
                        <input type="number" className="form-control" id="damaged" maxLength="10" required />
                    </div>
                </div>

                <div className="col-md-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <select className="form-select" id="username" required>
                        <option value="1">นาย 1</option>
                        <option value="2">นาย 2</option>
                        <option value="3">นาย 3</option>
                        <option value="4">นาย 4</option>
                    </select>
                </div>

                <div className="col-md-9">
                    <label htmlFor="textarea" className="form-label">Note</label>
                    <textarea className="form-control" aria-label="With textarea" />
                </div>

                <div className="button-add col-12">
                    <button type="button" className="btn btn-success">Submit</button> 
                    <button type="button" className="btn btn-danger">Back</button>
                </div>

         

            </form>
        </div>
    );
}

export default FormAddWork;