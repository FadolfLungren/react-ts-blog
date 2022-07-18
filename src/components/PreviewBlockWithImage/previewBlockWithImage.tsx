import React, {FC} from 'react';
import {SiPackage} from "../../models/PackageModel";
import "./previewBlockWithImage.css"
import {shortenString} from "../../utils/utils";

interface IPreviewBlockWithImage {
    SiPackage:SiPackage
}

const PreviewBlockWithImage:FC<IPreviewBlockWithImage> = ({SiPackage}) => {
    return (
        <div className={"block"}>
            <img alt={'#'} src={SiPackage.img_src} className={"blockImage"}/>
            <div className={"DiscriptionBlock"}>
                {shortenString(SiPackage.title,40) + "+" + SiPackage.id}
            </div>
        </div>
    );
};

export default PreviewBlockWithImage;