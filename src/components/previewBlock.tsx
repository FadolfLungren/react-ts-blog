import React, {FC} from 'react';
import {ISiPackage} from "../models/PackageModel";
import "./previewBlock.css"

interface IPackageBlock{
    SiPackage:ISiPackage
    Highlight?:React.MouseEventHandler<HTMLDivElement>
    StopHighlighting?:React.MouseEventHandler<HTMLDivElement>
    isHighlited?:boolean
}

const PreviewBlock:FC<IPackageBlock> = ({SiPackage, Highlight, StopHighlighting, isHighlited}) => {
    return (
        <div onMouseEnter={Highlight}
             onMouseLeave={StopHighlighting}
             className={isHighlited ? "SiPackBlock Highlited " : "SiPackBlock"}
        >

            {SiPackage.title + "+" + SiPackage.id}
        </div>
    );
};

export default PreviewBlock;