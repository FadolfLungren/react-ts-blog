import React, {FC, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../strore/redux";
import {Auth} from "../../strore/actionCreators";

const LoginPage:FC = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const {pending, error, User}  = useAppSelector(state => state.AuthReducer)
    const dispatch = useAppDispatch()

    useEffect(()=>{

    }, [])


    function v1(e:any){
        e.preventDefault()
        dispatch( Auth(login,password) )
        console.log(User)
    }
    return (
        <div className={"loginPage"}>
            <form className={"loginForm"}>
                <h1>Login</h1>
                <input value={login} onInput={(e) => setLogin(e.currentTarget.value)}/>
                <input value={password} onInput={(e) => setPassword(e.currentTarget.value)}/>
                <button onClick={(e)=>v1(e)}>Submit</button>
            </form>
        </div>

    );
};

export default LoginPage;