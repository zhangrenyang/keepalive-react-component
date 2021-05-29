import React from 'react';
const Home = (props) => {
    return (
        <div>
            <button onClick={() => props.dispatch({ type: 'DESTROY', payload: { cacheId: 'UserAdd' } })}>重置UserAdd</button>
            <button onClick={() => props.dispatch({ type: 'DESTROY', payload: { cacheId: 'UserList' } })}>重置UserList</button>
        </div>
    )
}
export default Home;