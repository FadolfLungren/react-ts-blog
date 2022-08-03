import React, {FC} from 'react';
import Header from "./Header/Header";
import LazyChunks from "../../components/LazyList/lazyChunks";

const MainPage:FC = () => {
    return (
        <div className="wrapper">
            <Header/>
            <LazyChunks/>
            <div className={"footer"} style={{gridColumnStart:1, gridColumnEnd:5}}>
                FOOTER
            </div>
        </div>
    );
};

export default MainPage;