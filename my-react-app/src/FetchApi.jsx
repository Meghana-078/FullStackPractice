import { useEffect, useState } from "react";

function FetchApi(){
    const[api,setapi]=useState([])
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((respose) => respose.json())
        .then((data) => setapi(data))
        .catch((err)=>console.log(err))
    return(
        <>
        <h1>Fetched Api</h1>
        <ul>
            {api.map((d)=>(
                <li key={d.id}>
                    {d.title}-{d.userId}
                </li>
            ))}
        </ul>
        </>
    )
}
export default FetchApi