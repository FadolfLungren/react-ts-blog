import React, {FC} from 'react';
import {SiPackage} from "../../models/PackageModel";


interface IPageBody {
    Package:SiPackage
}

const PageBody:FC<IPageBody> = ({Package}) => {
    return (
        <div className={"articlePage__body"}>
            <img src={Package.img_src} className={"topImage"}/>
            <h1>{ Package.title }</h1>
            <p>
                {Package.text}
            </p>
        </div>
    );
};

export default PageBody;