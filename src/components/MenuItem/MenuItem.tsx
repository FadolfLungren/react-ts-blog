import React, {FC} from 'react';

interface IMenuItem{
    children: string
}

const MenuItem:FC<IMenuItem> = ({children}) => {
    return (
        <li>
            {children}
        </li>
    );
};

export default MenuItem;