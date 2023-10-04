import React, { useContext } from 'react';
import { AuthContext } from "../context";
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const login = e => {
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }

    return (
        <div>
            <h1>Page for login</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Input username"/>
                <MyInput type="password" placeholder="Input password"/>
                <MyButton>Login</MyButton>
            </form>
        </div>
    );
};

export default Login;
