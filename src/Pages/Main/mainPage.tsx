import React, {FC} from 'react';
import LazyChunks from "../../components/LazyList/lazyChunks";

import Menu from "../../components/Menu/Menu";
import Header from "../../layout/Header/header";
import CarouselWithImage from "../../components/UI/CarouselWithImage/CarouselWithImage";
import PreviewBlock from "../../components/PreviewBlock/previewBlock";
import {useAppSelector} from "../../strore/redux";

const MainPage:FC = () => {

    const {SiPackages, isLoading, error} = useAppSelector(state => state.PacksReducer)

    function getImageFromSiPack (child:React.ReactElement):string{
        return child['props']['SiPackage']['img_src']
    }

    return (
        <>

            <Header>
                {isLoading && <div>Loading</div>}
                {error && <div>Error</div>}
                {!error && !isLoading &&
                    <CarouselWithImage getImageFromChild={getImageFromSiPack}>
                        {SiPackages.slice(0,4).map((SiPackage)=>
                            <PreviewBlock key={SiPackage.id} SiPackage={SiPackage}/>)}
                    </CarouselWithImage>
                }
            </Header>

            <LazyChunks/>
            <div className={"footer"} style={{gridColumnStart:1, gridColumnEnd:5}}>
                FOOTER
            </div>
        </>
    );
};

export default MainPage;