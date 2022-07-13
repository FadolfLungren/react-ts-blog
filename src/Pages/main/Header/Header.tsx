import React from 'react';
import CarouselWithImage from "../../../components/UI/CarouselWithImage/CarouselWithImage";
import PreviewBlock from "../../../components/previewBlock";
import {useAppSelector} from "../../../strore/redux";
import MenuItem from "../../../components/MenuItem/MenuItem";

const Header = () => {

    const {SiPackages} = useAppSelector(state => state.PacksReducer)

    function getImageFromSiPack (child:React.ReactElement):string{
        return child['props']['SiPackage']['img_src']
    }

    return (
        <>
            <ul className="menu">

                <MenuItem>Authors</MenuItem>
                <MenuItem>Favorite</MenuItem>
                <MenuItem>Login</MenuItem>
                <MenuItem>Publish</MenuItem>


            </ul>

            <CarouselWithImage className={"Carousel"} getImageFromChild={getImageFromSiPack}>

                {SiPackages.slice(0,7).map((SiPackage)=>
                    <PreviewBlock SiPackage={SiPackage}/>)}

            </CarouselWithImage>
        </>
    );
};

export default Header;