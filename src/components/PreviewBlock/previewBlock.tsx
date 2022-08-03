import React, {FC} from 'react';
import {SiPackage} from "../../models/PackageModel";
import styles from "./previewBlock.module.scss"
import {shortenString} from "../../utils/utils";

interface IPackageBlock{
    SiPackage:SiPackage
    Highlight?:React.MouseEventHandler<HTMLDivElement>
    StopHighlighting?:React.MouseEventHandler<HTMLDivElement>
    isHighlited?:boolean
}

const PreviewBlock:FC<IPackageBlock> = ({SiPackage, Highlight, StopHighlighting, isHighlited}) => {
    return (
        <div onMouseEnter={Highlight}
             onMouseLeave={StopHighlighting}
             className={isHighlited ? `${styles.SiPackBlock} ${styles.Highlited}` : styles.SiPackBlock}
        >
            {shortenString(SiPackage.title,40) + "+" + SiPackage.id}
        </div>
    );
};

export default PreviewBlock;