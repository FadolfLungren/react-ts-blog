import React from 'react';
import CarouselWithImage from "../../../components/UI/CarouselWithImage/CarouselWithImage";
import PreviewBlock from "../../../components/PreviewBlock/previewBlock";
import {useAppSelector} from "../../../strore/redux";
import MenuItem from "../../../components/MenuItem/MenuItem";
import Menu from "../../../components/Menu/Menu";

const Header = () => {

    const {SiPackages, isLoading, error} = useAppSelector(state => state.PacksReducer)

    function getImageFromSiPack (child:React.ReactElement):string{
        return child['props']['SiPackage']['img_src']
    }

    return (
        <div className={'header'}>
            <Menu/>
            {isLoading && <div>Loading</div>}
            {error && <div>Error</div>}
            {!error && !isLoading &&
                <CarouselWithImage getImageFromChild={getImageFromSiPack}>
                    {SiPackages.slice(0,4).map((SiPackage)=>
                        <PreviewBlock SiPackage={SiPackage}/>)}
                </CarouselWithImage>
            }


        </div>
    );
};

export default Header;