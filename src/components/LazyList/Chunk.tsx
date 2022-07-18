import React, {FC} from 'react';
import {SiPackage} from "../../models/PackageModel";
import PreviewBlockWithImage from "../PreviewBlockWithImage/previewBlockWithImage";


interface IChunk{
    SiPacks:SiPackage[],
    pos:number
}
const Chunk:FC<IChunk> = ({SiPacks, pos}) => {

    return (
        <div className={"chunk"} >
            {SiPacks.map((SiPack)=>
                <PreviewBlockWithImage SiPackage={SiPack}/>
            )}
        </div>
    );
};

export default Chunk;