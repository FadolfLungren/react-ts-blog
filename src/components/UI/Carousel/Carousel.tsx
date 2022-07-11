import React, {FC, MouseEvent, useEffect, useState} from 'react';
import useInterval from "../../../hooks/useInterval";
import './Carousel.css'
interface ISlider{
    children:React.ReactNode | React.ReactNode[]
}


const Carousel:FC<ISlider> = ({children}) => {
    const [isPaused, setIsPaused] = useState(false)
    const [selectedPackage,setSelectedPackage] = useState(0)

    useInterval(()=>{
        CyclePackages()
    },1000)



    function CyclePackages(){
        if(!isPaused){
            if(selectedPackage === React.Children.count(children)-1){
                setSelectedPackage(0)
            }else{
                setSelectedPackage(selectedPackage+1)
            }
        }
    }

    function HighlightElem(event:any, id:number){
        setIsPaused(true)
        setSelectedPackage(id)
    }

    function StopHighlightingElem(event:any, id:number){
        setIsPaused(false)

    }

    return (
        <div className={"Carousel"}>
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