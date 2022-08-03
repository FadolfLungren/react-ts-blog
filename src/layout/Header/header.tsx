import React, {FC} from 'react';
import Menu from "../../components/Menu/Menu";
import styles from "./header.module.scss"

interface IHeader{
    children:React.ReactNode | React.ReactNode[]
}

const Header:FC<IHeader> = ({children}) => {
    return (
        <div>
            <div className={styles.header}>
                <Menu/>
                <div className={styles.headerContent}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Header;