import React, { useContext, useRef,useEffect } from "react";
import CacheContext from './CacheContext';
import * as cacheTypes from './cache-types';
function withKeepAlive(OldComponent, { cacheId = window.location.pathname,scroll=false }) {
    return function (props) {
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
                   doms.forEach(dom=>{
                       if (cacheState.scrolls[dom])
                         dom.scrollTop = cacheState.scrolls[dom];
                   });
                  }
            }else{
                mount({ cacheId, element: <OldComponent {...props} dispatch={dispatch}/> })
            }
        }, [cacheStates, dispatch, mount, props]);
        return <div id={`keepalive_${cacheId}`} ref={ref} />;
    }
}
export default withKeepAlive;