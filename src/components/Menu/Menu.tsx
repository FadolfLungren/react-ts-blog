import React, {memo, useEffect} from 'react';
import MenuItem from "../MenuItem/MenuItem";
import useObserver from "../../hooks/useObserver";
import {useAppDispatch, useAppSelector} from "../../strore/redux";
import {AuthSlice} from "../../strore/slices/AuthSlice";
import styles from "./Menu.module.scss"

const Menu = memo(() => {
    const {isAuth, User} = useAppSelector(state => state.AuthReducer)
    const [ isVisible, Ref ] = useObserver()
    const dispatch = useAppDispatch()
    return (
        <>
            <ul className={styles.menu} >
                <MenuItem url={"/"}>Main</MenuItem>
                {isAuth ?
                    <>
                        <h4>{User?.username}</h4>
                        <MenuItem url={"/login3"}>Publish</MenuItem>
                        {User?.role==='admin' && <MenuItem url={"/admin"}>Admin</MenuItem>}
                        <li className={styles.logout} onClick={ ()=>dispatch(AuthSlice.actions.logout()) }>logout</li>
                    </>

                :
                    <MenuItem url={"/login"}>Login</MenuItem>
                }

                <div ref={Ref} style={{height:"10px",width:"100%",backgroundColor:"red", marginTop:"auto"}}/>

            </ul>
            <div className={styles.menuTop} style={isVisible ? {display:"none"} : {}}>
                <MenuItem url={"/"}>Main</MenuItem>
            </div>

        </>

    );
});

export default Menu;