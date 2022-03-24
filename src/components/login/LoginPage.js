import "./LoginPage.css";
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import pic7 from '../img/pic7.jpg'
import pic4 from '../img/pic4.jpg'

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/login', {
                email: email,
                password: password
            });
            navigate("/dashboard")
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
        <div className="card-bg" style={{ backgroundImage: `url(${pic7})` }}>
            <div className="card-group">
                <div className="card">
                    <div className="pic-left">
                        <img src={pic4} alt="pic4" />
                    </div>
                </div>

                <div className="card">
                    {/* <div className="card-container"> */}

                    <form onSubmit={Auth}>
                        <p className="has-text-centered">{msg}</p>
                        <div className="card-content-down">
                            <h1 id="login">login</h1>
                            <div className="form-group">
                                <i className="fa fa-user icon" />
                                <input className="form-control" type="text" id="username" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <i className="fa fa-key icon" />
                                <input className="form-control" type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>

                            <div className="form-group-button">
                                <div>
                                    <button type="Submit" className="btn b1 submit">Log In</button>
                                </div>

                                <Link to="/register">
                                    <button type="Submit" className="btn b2 submit">Register</button>
                                </Link>
                            </div>

                        </div>
                    </form>
                    {/* </div> */}
                </div>
            </div>
        </div>

        // <section className="hero has-background-grey-light is-fullheight is-fullwidth">
        //     <div className="hero-body">
        //         <div className="container">
        //             <div className="columns is-centered">
        //                 <div className="column is-4-desktop">
        //                     <form onSubmit={Auth} className="box">
        //                         <p className="has-text-centered">{msg}</p>
        //                         <div className="field mt-5">
        //                             <label className="label">Email or Username</label>
        //                             <div className="controls">
        //                                 <input type="text" className="input" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)} />
        //                             </div>
        //                         </div>
        //                         <div className="field mt-5">
        //                             <label className="label">Password</label>
        //                             <div className="controls">
        //                                 <input type="password" className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
        //                             </div>
        //                         </div>
        //                         <div className="field mt-5">
        //                             <button className="button is-success is-fullwidth">Login</button>
        //                         </div>
        //                     </form>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
    );
}

export default Login;
