import React, {FC} from 'react';


interface ILazyChunks {
    children:React.ReactNode | React.ReactNode[]
}


const LazyChunks:FC<ILazyChunks> = ({children}) => {
    return (
        <div className={"body"}>
            {children}
        </div>
    );
};

export default LazyChunks;