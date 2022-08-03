import React, {FC, MouseEvent, useEffect, useState} from 'react';
import useInterval from "../../../hooks/useInterval";
import styles from './Carousel.module.scss'
import {useCarousel} from "../../../hooks/useCarousel";

interface ICarousel{
    children?:React.ReactNode | React.ReactNode[]

}


const Carousel:FC<ICarousel> = ({children}) => {

    const [selectedPackage, HighlightElem, StopHighlightingElem] = useCarousel(React.Children.count(children))

    return (

        <div className={styles.Carousel}>
            {React.Children.map(children,(child,id)=>{
                // @ts-ignore
                return React.cloneElement(child,{
                    isHighlited: id === selectedPackage,
                    Highlight: (e:any)=>HighlightElem(e, id),
                    StopHighlighting: StopHighlightingElem
                })
            })}
        </div>

    );
};

export default Carousel;