import React, { useEffect } from "react";
import { login } from "../../store/auth"
import { useDispatch } from "react-redux"


const DemoLogin = () => {
    const dispatch = useDispatch();


    const demoUser = {
        username: 'Demo', 
        email: 'demo@aa.io',
        password: 'password'
    }

    const handleDemoLogin = async () => {
       dispatch(login(demoUser.email, demoUser.password))
    }

    return (
        <button
        onClick={
           () =>{ handleDemoLogin() }
        }>Demo Login</button>
    )
}

export default DemoLogin;
