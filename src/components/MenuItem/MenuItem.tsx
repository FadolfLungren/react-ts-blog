import React, {FC} from 'react';
import "./menuItem.css"
import {useNavigate} from "react-router-dom";

interface IMenuItem{
    children: string
    url:string
}

const MenuItem:FC<IMenuItem> = ({children, url}) => {
    const nav = useNavigate()

    return (
        <li className={"MenuItem"} onClick={()=>nav(url)}>
            {children}
        </li>
    );
};

export default MenuItem;