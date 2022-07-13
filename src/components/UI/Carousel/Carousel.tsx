import React, {FC, MouseEvent, useEffect, useState} from 'react';
import useInterval from "../../../hooks/useInterval";
import './Carousel.css'
import {useCarousel} from "../../../hooks/useCarousel";

interface ICarousel{
    children?:React.ReactNode | React.ReactNode[]
    className:string
}


const Carousel:FC<ICarousel> = ({children, className}) => {

    const [selectedPackage, HighlightElem, StopHighlightingElem] = useCarousel(React.Children.count(children))

    return (

        <div className={className}>
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