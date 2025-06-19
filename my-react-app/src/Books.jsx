import { useState } from "react"


function Books(props){
    const[amt,setamt]=useState(null);
    function BuyNow(dis){
        console.log(props.name,'Purchased with',dis,' % discount',amt)
        setamt(amt-amt*(dis/100))
        
    }
    return(
        <>
        {props.name && <div class="card">
        <img src={props.image} alt="" height={"200px"} width={"200px"} />
        <p>{props.name}</p>
        <p>{props.amt}</p>
        <button onClick={()=>BuyNow=(20)}>Buy Now</button>
        <button onClick={()=>handledelete(props.id)}>Delete</button>
        </div>}
        </>

    )
}

export default Books