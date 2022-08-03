import React, {FC, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../strore/redux";
import {AuthUser} from "../../strore/actionCreators";
import styles from "./loginPage.module.scss"
import 'swiper/css';
import 'swiper/css/bundle'
import {useNavigate} from "react-router-dom";



const LoginPage:FC = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [select, setSelect] = useState('dd')
    const [text, setText] = useState('ergerg')
    const [inp, setInp] = useState('ergerg')

    const dispatch = useAppDispatch()
    const nav = useNavigate()

    function submitForm(e:any){
        e.preventDefault()
        dispatch( AuthUser(login,password) )
            .then((user)=>{
                if(user){
                    nav('/')
                }else{
                    nav('/login')
                }
            })
    }


    function txt(e:React.ChangeEvent<HTMLTextAreaElement>) {
        setText(e.target.value)
        console.log(text)
    }
    return (
        <>
            <div className={styles.loginPage}>
                <h1>Login</h1>
                <form className={styles.loginForm}>
                    <input
                        value={login}
                        onInput={(e) => setLogin(e.currentTarget.value)}
                        placeholder={"login"}
                        type={"text"}
                    />
                    <input
                        value={password}
                        onInput={(e) => setPassword(e.currentTarget.value)}
                        type = "password"
                        placeholder={"password"}
                    />
                    <button onClick={(e)=>submitForm(e)} type={"submit"}>Submit</button>
                </form>
                <a href={"/"}>register</a>
            </div>

        </>

    );
};

export default LoginPage;