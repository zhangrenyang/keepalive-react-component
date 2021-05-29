import *  as cacheTypes from './cache-types';
function cacheReducer(cacheStates = {}, { type, payload }) {
    switch (type) {
        case cacheTypes.CREATE:
            return { ...cacheStates,
                [payload.cacheId]: {
                    scrolls:{},
                    cacheId:payload.cacheId,
                    element:payload.element,
                    status:cacheTypes.CREATE
                } };
        case cacheTypes.CREATED:
            return { ...cacheStates,
                [payload.cacheId]: {
                    ...cacheStates[payload.cacheId],
                    doms:payload.doms,
                    status:cacheTypes.CREATED
                } };   
        case cacheTypes.ACTIVE:
            return { ...cacheStates,
                [payload.cacheId]: {
                    ...cacheStates[payload.cacheId],
                    status:cacheTypes.ACTIVE
                } };           
        case cacheTypes.DESTROY:
            return { ...cacheStates,
                [payload.cacheId]:{
                    ...cacheStates[payload.cacheId],
                    status:cacheTypes.DESTROY
                }};              
        default:
            return cacheStates;
    }
}
export default cacheReducer;