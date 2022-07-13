import React, {useState} from "react";
import useInterval from "./useInterval";
import {current} from "@reduxjs/toolkit";


export const useCarousel = (elementsAmount:number):[
    currentElement:number,
    HighlightElem:(event: any, id: number)=>void,
    StopHighlightingElem:()=>void
] => {

    const [isPaused, setIsPaused] = useState(false)
    const [selectedElement,setSelectedElement] = useState(0)

    useInterval(()=>{
        CyclePackages()
    },1000)

    function CyclePackages(){
        if(!isPaused){
            if(selectedElement === elementsAmount-1){
                setSelectedElement(0)
            }else{
                setSelectedElement(selectedElement+1)
            }
        }
    }

    function HighlightElem(event:any, id:number){
        setIsPaused(true)
        setSelectedElement(id)
    }

    function StopHighlightingElem(){
        setIsPaused(false)
    }

    return [selectedElement, HighlightElem, StopHighlightingElem]
}