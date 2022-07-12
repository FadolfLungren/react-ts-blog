import React, {useCallback, useEffect, useRef, useState} from "react";


const useObserver = ():[
    isVisible:boolean,
    Ref:React.LegacyRef<HTMLDivElement>
] => {
    const Ref:React.LegacyRef<HTMLDivElement> = useRef(null)
    const [isVisible ,setIsVisible] = useState(false)

    const onIntersection = useCallback((entries:IntersectionObserverEntry[])=>{
        const [entry] = entries
        console.log(entry.isIntersecting)
        setIsVisible(entry.isIntersecting)
    },[])

    useEffect(()=>{
        const Observer = new IntersectionObserver(onIntersection,{
            root:null,
            rootMargin:"0px",
            threshold:1.0
        })

        if (Ref.current) Observer.observe(Ref.current)

        return ()=>{
            if(Ref.current) Observer.unobserve(Ref.current)
        }
    },[])

    return [isVisible, Ref]
}

export default useObserver
