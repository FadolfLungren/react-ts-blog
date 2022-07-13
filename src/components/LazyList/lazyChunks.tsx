import React, {FC, useEffect, useState} from 'react';
import useObserver from "../../hooks/useObserver";
import Chunk from "./Chunk";
import {useAppSelector} from "../../strore/redux";


interface ILazyChunks {

}


const LazyChunks:FC<ILazyChunks> = ({}) => {

    const [isVisible, Ref] = useObserver()
    const [chunksAmount, setChunksAmount] = useState(1)

    const {SiPackages} = useAppSelector(state => state.PacksReducer)

    useEffect(()=>{
        setChunksAmount(chunksAmount+1)
    }, [isVisible])

    function configureChunks():React.ReactNode[]{
        const Chunks = []

        if(SiPackages){

            for(let i =0; i<chunksAmount; i++){
                const displayedPacks = SiPackages.slice(16*i, 16*i+16)
                if(displayedPacks.length){
                    Chunks.push(<Chunk SiPacks={displayedPacks} pos={i}/>)
                }
            }

        }
        return Chunks
    }

    return (
        <div className={"body"}>
            {configureChunks()}
            <div ref={Ref} style={{width:"100%", height:"10px", background:"red"}}/>
        </div>
    );
};

export default LazyChunks;