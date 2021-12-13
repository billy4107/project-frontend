import "./LoginPage.css";
import React, { useState } from "react";

function Login({ Login, error }) {

    const [details, setDetails] = useState({ username: "", password: "" });

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return (
        <div className="card-bg">
            <div className="card-container">
                <div className="card-content-top"><p id="form">Login Form</p></div>

                <form onSubmit={submitHandler}>
                    <div className="card-content-down">
                        <h1 id="login">login</h1>
                        {(error !== "") ? ( <div>{error}</div>) : ""}
                        <div className="form-group">
                            <i className="fa fa-user icon" />
                            <input className="form-control" type="text" id="username" placeholder="Username" onChange={e => setDetails({ ...details, username: e.target.value })} value={details.username} />
                        </div>

                        <div className="form-group">
                            <i className="fa fa-key icon" />
                            <input className="form-control" type="password" id="password" placeholder="Password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                        </div>

                        <div className="form-group-button">
                            <div>
                                <label className="checkbox-inline"><input type="checkbox" value="" /> Remember me</label>
                            </div>
                            <div>
                                <button type="submit" className="btn btn-danger submit">Log In</button>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
