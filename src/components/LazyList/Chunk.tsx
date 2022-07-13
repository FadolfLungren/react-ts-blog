import React, {FC} from 'react';
import {SiPackage} from "../../models/PackageModel";
import PreviewBlock from "../previewBlock";

interface IChunk{
    SiPacks:SiPackage[],
    pos:number
}
const Chunk:FC<IChunk> = ({SiPacks, pos}) => {

    return (
        <div className={"chunk"} >
            {SiPacks.map((SiPack)=>
                <PreviewBlock SiPackage={SiPack}/>
            )}
        </div>
    );
};

export default Chunk;