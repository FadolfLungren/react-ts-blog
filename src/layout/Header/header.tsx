import React, {FC} from 'react';
import Menu from "../components/Menu/Menu";

interface IHeader{
    children:React.ReactNode | React.ReactNode[]
}

const Header:FC<IHeader> = ({children}) => {
    return (
        <div>
            <div className={"header"}>
                <Menu/>
                <div className={"header__content"}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Header;