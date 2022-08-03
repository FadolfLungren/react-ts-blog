import React, {FC} from 'react';
import {SiPackage} from "../../models/PackageModel";

import {shortenString} from "../../utils/utils";
import {useNavigate} from "react-router-dom";
import styles from "./previewBlockWithImage.module.scss"

interface IPreviewBlockWithImage {
    SiPackage:SiPackage
}

const PreviewBlockWithImage:FC<IPreviewBlockWithImage> = ({SiPackage}) => {
    const nav = useNavigate()
    return (
        <div className={styles.Block} onClick={()=>nav(`/article/${SiPackage.id-1}`)}>
            <img alt={'#'} src={SiPackage.img_src}/>
            <div className={styles.DiscriptionBlock}>
                {shortenString(SiPackage.title,40) + "+" + SiPackage.id}
            </div>
        </div>
    );
};

export default PreviewBlockWithImage;