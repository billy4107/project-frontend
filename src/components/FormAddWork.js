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
                    <p className="nav-link active" ><h4>Details</h4></p>
                </div>
            </div>

            <form className="form-input row g-3" autocomplete="off">

                <div className="col-md-4">
                    <label for="validationDefault02" className="form-label">Work type</label>
                    <select className="col-md-4 form-select" required aria-label="select example">
                        <option selected disabled value="">กรุณาเลือก*</option>
                        <option value="1">เก็บผลผลิต</option>
                        <option value="2">ดูแล/ให้ยา</option>
                        <option value="3">ทำความสะอาด</option>
                        <option value="4">ตรวจเช็ค</option>
                    </select>
                </div>

                <div className="col-md-4">
                    <label for="harvest" className="form-label">Harvest</label>
                    <input type="number" className="form-control" id="harvest" maxlength="10" required />
                </div>

                <div className="col-md-4">
                    <label for="damaged" className="form-label">Damaged</label>
                    <div className="input-group">
                        <input type="number" className="form-control" id="damaged" maxlength="10" required />
                    </div>
                </div>

                <div className="col-md-3">
                    <label for="username" className="form-label">Username</label>
                    <select className="form-select" id="username" required>
                        <option value="1">นาย 1</option>
                        <option value="2">นาย 2</option>
                        <option value="3">นาย 3</option>
                        <option value="4">นาย 4</option>
                    </select>
                </div>

                <div className="col-md-9">
                    <label for="textarea" className="form-label">Note</label>
                    <textarea className="form-control" aria-label="With textarea" />
                </div>

                <div className="button-add col-12">
                    <button type="button" class="btn btn-success">Submit</button> 
                    <button type="button" class="btn btn-danger">Back</button>
                </div>

         

            </form>
        </div>
    );
}

export default FormAddWork;