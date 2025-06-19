import React,{useState} from "react";

function Use(){
    const [count,setCount]=useState(0);
    const click=()=>
        setCount(count+1);

return(
    <>
    <div class="btn">
    <button onClick={click}>{count==10?"Infinity":count}</button>
    </div>
    </>
)
}
export default Use