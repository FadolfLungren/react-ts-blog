import React, {FC} from 'react';
import {ISiPackage} from "../../models/PackageModel";
import PreviewBlock from "../previewBlock";

interface IChunk{
    SiPacks:ISiPackage[],
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