import React, {Children, FC, MouseEvent, useEffect, useState} from 'react';
import useInterval from "../../../hooks/useInterval";
import styles from './CarouselWithImage.module.scss'
import {useCarousel} from "../../../hooks/useCarousel";

interface ICarouselWithImage{
    children:React.ReactNode | React.ReactNode[] | React.ReactElement | React.ReactElement[]
    getImageFromChild:(child:React.ReactElement)=>string
}


const CarouselWithImage:FC<ICarouselWithImage> = ({children, getImageFromChild}) => {

    const [selectedPackage, HighlightElem, StopHighlightingElem] = useCarousel(React.Children.count(children))
    const childrenArr = React.Children.toArray(children)

    return (
        <div className={styles.featuredPacks} style={{
            // @ts-ignore
            backgroundImage: `url("${ childrenArr.length && getImageFromChild(childrenArr[selectedPackage]) }")`,
            backgroundSize: 'cover'}}>

            <div className={styles.carouselWithImage}>
                {React.Children.map(children,(child ,id)=>{
                    // @ts-ignore
                    return React.cloneElement(child,{
                        isHighlited: id === selectedPackage,
                        Highlight: (e:any)=>HighlightElem(e, id),
                        StopHighlighting: StopHighlightingElem
                    })
                })}
            </div>
        </div>
    );
};

export default CarouselWithImage;