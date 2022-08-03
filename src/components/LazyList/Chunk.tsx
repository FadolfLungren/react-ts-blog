import React, {FC} from 'react';
import {SiPackage} from "../../models/PackageModel";
import PreviewBlockWithImage from "../PreviewBlockWithImage/previewBlockWithImage";
import styles from './Chunk.module.scss'


interface IChunk{
    SiPacks:SiPackage[],
    pos:number
}
const Chunk:FC<IChunk> = ({SiPacks, pos}) => {

    return (
        <div className={styles.chunk} key={Math.floor(SiPacks.length/16)}>
            {SiPacks.map((SiPack)=>
                <PreviewBlockWithImage key={SiPack.id} SiPackage={SiPack}/>
            )}
        </div>
    );
};

export default Chunk;