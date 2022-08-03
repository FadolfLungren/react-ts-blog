import React, {FC} from 'react';
import styles from "./menuItem.module.scss"
import {useNavigate} from "react-router-dom";

interface IMenuItem{
    children: string
    url:string
}

const MenuItem:FC<IMenuItem> = ({children, url}) => {
    const nav = useNavigate()

    return (
        <li className={styles.MenuItem} onClick={()=>nav(url)}>
            {children}
        </li>
    );
};

export default MenuItem;