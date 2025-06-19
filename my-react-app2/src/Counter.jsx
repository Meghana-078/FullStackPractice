import { useRef, useState } from "react";

function Counter(){
    const [count,setcount]=useState(0);
    let refCount=useRef(0)
    function inc(){
        // setcount(preCount=>preCount+1)
        // setcount(preCount=>preCount+1)
        // setcount(count+1)
        refCount.current+=1
        console.log(refCount)
        
    }
    return(
        <>
        <button onClick={inc}>{count}</button>
        <button onClick={()=>setcount(refCount.current)}>Update</button>
        </>
    )
    
}
export default Counter