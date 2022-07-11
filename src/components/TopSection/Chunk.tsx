import React, {FC} from 'react';
import {ISiPackage} from "../../models/PackageModel";
import PreviewBlock from "../previewBlock";

interface IChunk{
    SiPacks:ISiPackage[],
    pos:number
}
const Chunk:FC<IChunk> = ({SiPacks, pos}) => {
    const displayedPacks = SiPacks.slice(16*pos, 16*pos+16)
    return (
        <div className={"chunk"} >
            {displayedPacks.map((SiPack)=>
                <PreviewBlock SiPackage={SiPack}/>
            )}
        </div>
    );
};

export default Chunk;