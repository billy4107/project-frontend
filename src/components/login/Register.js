import React, { useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import pic7 from '../img/pic7.jpg'
import pic4 from '../img/pic4.jpg'
import "./Register.css";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');

    const Register = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/users', {
                name: name,
                email: email,
                password: password,
                confPassword: confPassword
            });
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

                    <form onSubmit={Register}>
                        <p className="has-text-centered">{msg}</p>
                        <div className="card-content-down">
                            <h1 id="login">Register</h1>

                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Name"
                                    value={name} onChange={(e) => setName(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Email"
                                    value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password"
                                    value={password} onChange={(e) => setPassword(e.target.value)} />

                            </div>

                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Confirm Password"
                                    value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />

                            </div>

                            <div className="form-group-button">
                                <Link to="/">
                                    <button type="button" className="btn r1 submit">Register</button>
                                </Link>

                                <Link to="/">
                                    <button type="button" className="btn r2 submit">Back</button>
                                </Link>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>

        // <section className="hero has-background-grey-light is-fullheight is-fullwidth">
        //     <div className="hero-body">
        //         <div className="container">
        //             <div className="columns is-centered">
        //                 <div className="column is-4-desktop">
        //                     <form onSubmit={Register} className="box">
        //                         <p className="has-text-centered">{msg}</p>
        //                         <div className="field mt-5">
        //                             <label className="label">Name</label>
        //                             <div className="controls">
        //                                 <input type="text" className="input" placeholder="Name"
        //                                     value={name} onChange={(e) => setName(e.target.value)} />
        //                             </div>
        //                         </div>
        //                         <div className="field mt-5">
        //                             <label className="label">Email</label>
        //                             <div className="controls">
        //                                 <input type="text" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        //                             </div>
        //                         </div>
        //                         <div className="field mt-5">
        //                             <label className="label">Password</label>
        //                             <div className="controls">
        //                                 <input type="password" className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
        //                             </div>
        //                         </div>
        //                         <div className="field mt-5">
        //                             <label className="label">Confirm Password</label>
        //                             <div className="controls">
        //                                 <input type="password" className="input" placeholder="******" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
        //                             </div>
        //                         </div>
        //                         <div className="field mt-5">
        //                             <button className="button is-success is-fullwidth">Register</button>
        //                         </div>
        //                     </form>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
    )
}

export default Register