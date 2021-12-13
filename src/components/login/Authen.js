import React, { useState } from "react";
import LoginPage from "./LoginPage";

const Authen = () => {
    const userLogin = {
        username: "admin",
        password: "123456789"
    }

    const [user, setUser] = useState({ username: "", password: "" });
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);

        if (details.username === userLogin.username && details.password === userLogin.password) {
            console.log("Log in complete")
            setUser({
                username: details.username,
                password: details.password,
            })
        } else {
            console.log("fails")
            setError("wrong username")
        }

    }

    // const Logout = () => {
    //     setUser({ username: "", password: "" })
    // }

    return (
        // <div>
        //     {(user.username != "") ? (
        //         <p>suscces</p>
        //     ) : (
        //         <LoginPage Login={Login} error={error} />)}
        // </div>
        <LoginPage Login={Login} error={error} />
    );
}

export default Authen;