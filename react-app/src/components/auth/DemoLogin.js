import React from "react";
import { login } from "../../store/auth"
import { useDispatch } from "react-redux"

const DemoLogin = () => {
    const dispatch = useDispatch();

    const demoUser = {
        username: 'Demo', 
        email: 'demo@aa.io',
        password: 'password'
    }

    return (
        <button
        onClick={
            () => dispatch(login(demoUser.email, demoUser.password))
        }>Demo Login</button>
    )
}

export default DemoLogin;
