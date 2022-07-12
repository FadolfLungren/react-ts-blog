import React, {useCallback, useEffect, useRef, useState} from 'react';
import PreviewBlock from "./components/previewBlock";
import {ISiPackage} from "./models/PackageModel";
import Carousel from "./components/UI/Carousel/Carousel";
import Chunk from "./components/TopSection/Chunk";
import useObserver from "./hooks/useObserver";
import LazyChunks from "./components/TopSection/lazyChunks";

function App() {
    const PackageTest:ISiPackage = {title:"23", id:32, file:"", img_src:""}
    const PackagesTest:ISiPackage[] = []
    for (let i = 0; i < 123; i++) {
        PackagesTest.push(PackageTest)
    }

    const bottomRef:React.LegacyRef<HTMLDivElement> = useRef(null)

    const [isVisible, Ref] = useObserver()
    const [chunksAmount, setChunksAmount] = useState(1)
    useEffect(()=>{
        setChunksAmount(chunksAmount+1)
    }, [isVisible])

    function configureChunks():React.ReactNode[]{
        const Chunks = []
        for(let i =0; i<chunksAmount; i++){
            const displayedPacks = PackagesTest.slice(16*i, 16*i+16)
            if(displayedPacks.length){
                Chunks.push(<Chunk SiPacks={displayedPacks} pos={i}/>)
            }
        }
        return Chunks
    }

  return (
    <div className="App">
        <div className="wrapper">
            <div className="menu">
                sss
            </div>
            <div className="featuredPacks">
                <Carousel>
                    <PreviewBlock SiPackage={PackageTest}/>
                    <PreviewBlock SiPackage={PackageTest}/>
                    <PreviewBlock SiPackage={PackageTest}/>
                    <PreviewBlock SiPackage={PackageTest}/>
                    <PreviewBlock SiPackage={PackageTest}/>
                    <PreviewBlock SiPackage={PackageTest}/>
                    <PreviewBlock SiPackage={PackageTest}/>
                    <PreviewBlock SiPackage={PackageTest}/>
                    <PreviewBlock SiPackage={PackageTest}/>
                    <PreviewBlock SiPackage={PackageTest}/>
                </Carousel>
            </div>
            <LazyChunks>
                {configureChunks()}
                <div ref={Ref} style={{width:"100%", height:"10px", background:"red"}}/>
            </LazyChunks>
        </div>
    </div>
  );
}

export default App;
