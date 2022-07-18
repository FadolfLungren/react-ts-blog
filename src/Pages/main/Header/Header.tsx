import React from 'react';
import CarouselWithImage from "../../../components/UI/CarouselWithImage/CarouselWithImage";
import PreviewBlock from "../../../components/PreviewBlock/previewBlock";
import {useAppSelector} from "../../../strore/redux";
import MenuItem from "../../../components/MenuItem/MenuItem";

const Header = () => {

    const {SiPackages, isLoading} = useAppSelector(state => state.PacksReducer)

    function getImageFromSiPack (child:React.ReactElement):string{
        return child['props']['SiPackage']['img_src']
    }

    return (
        <>
            <ul className="menu">
                <MenuItem url={"/login3"}>Authors</MenuItem>
                <MenuItem url={"/login3"}>Favorite</MenuItem>
                <MenuItem url={"/login"}>Login</MenuItem>
                <MenuItem url={"/login3"}>Publish</MenuItem>
            </ul>
            {!isLoading ?
                <CarouselWithImage className={"Carousel"} getImageFromChild={getImageFromSiPack}>
                    {SiPackages.slice(0,7).map((SiPackage)=>
                        <PreviewBlock SiPackage={SiPackage}/>)}
                </CarouselWithImage>
            :
            <div>Loading</div>
            }

        </>
    );
};

export default Header;