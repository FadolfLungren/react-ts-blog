import React, {useCallback, useEffect, useRef, useState} from 'react';
import PreviewBlock from "./components/previewBlock";
import {SiPackage} from "./models/PackageModel";
import Carousel from "./components/UI/Carousel/Carousel";
import Chunk from "./components/LazyList/Chunk";
import useObserver from "./hooks/useObserver";
import LazyChunks from "./components/LazyList/lazyChunks";
import {useAppDispatch, useAppSelector} from "./strore/redux";
import {PacksSlice} from "./strore/PacksSlice";
import {fetchSiPacks} from "./strore/actionCreators";
import CarouselWithImage from "./components/UI/CarouselWithImage/CarouselWithImage";
import Header from "./Pages/main/Header/Header";

function App() {
    const PackageTest:SiPackage = {title:"23", id:32, file:"", img_src:""}
    const {SiPackages, isLoading, error} = useAppSelector(state => state.PacksReducer)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(fetchSiPacks())
    },[])

    const bottomRef:React.LegacyRef<HTMLDivElement> = useRef(null)




  return (
    <div className="App">
        <div className="wrapper">
            <Header/>
            <LazyChunks/>
            <div className={"footer"} style={{gridColumnStart:1, gridColumnEnd:5}}>
                FOOTER
            </div>
        </div>
    </div>
  );
}

export default App;
