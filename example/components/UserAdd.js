import React from 'react';
const UserAdd = ()=>{
    let [number,setNumber]=React.useState(0);
    return (
        <div>
            用户名:<input/>
            <hr/>
            <button onClick={()=>setNumber(number=>number+1)}>{number}</button>
        </div>
    )
}
export default UserAdd;