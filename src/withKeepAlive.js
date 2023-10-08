import React, { useContext, useRef,useEffect } from "react";
import CacheContext from './CacheContext';
import * as cacheTypes from './cache-types';

const setScrollTop=(dom,cacheState)=>{
    const next=(dom)=>{
        if(cacheState.scrolls.get(dom)){
            dom.scrollTop = cacheState.scrolls.get(dom);
        }
        Array.from(dom.children).forEach(item=>{
            next(item)
        })
    }
    next(dom)
}
function withKeepAlive(OldComponent, { cacheId = window.location.pathname,scroll=false }) {
    
    return function (props) {
        console.log('Render');
        const {mount, cacheStates,dispatch,handleScroll } = useContext(CacheContext);
        const ref = useRef(null);
        useEffect(()=>{
            if(scroll){
                ref.current.addEventListener('scroll', handleScroll.bind(null, cacheId),true);
            }
        },[handleScroll]);
        useEffect(() => {
            let cacheState = cacheStates[cacheId];
            if(cacheState&&cacheState.doms && cacheState.status !== cacheTypes.DESTROY){
                let doms = cacheState.doms;
                doms.forEach(dom=>ref.current.appendChild(dom));
                if(scroll){
                    // 递归解决
                   doms.forEach(dom=>{
                        setScrollTop(dom,cacheState)      
                   });
                  }
            }else{
                mount({ cacheId, element:<OldComponent {...props} dispatch={dispatch}/>})
            }
        }, [cacheStates, dispatch, mount, props]);
        // return <OldComponent></OldComponent>
        return <div id={`keepalive_${cacheId}`} ref={ref} />;
    }
}
export default withKeepAlive;