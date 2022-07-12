import React, {useCallback, useEffect, useRef, useState} from "react";


const useObserver = () =>{
    const Ref = useRef(null)//:React.LegacyRef<HTMLDivElement>
    const [isVisible ,setIsVisible] = useState(false)

    const onIntersection = useCallback((entries)=>{//:IntersectionObserverEntry[]
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
