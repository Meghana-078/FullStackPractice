import { useEffect, useState } from "react"

const UseFetch=(url)=>{
    const[Data,setData]=useState([])
    const[error,setError]=useState(null)
    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
            .then((response)=>(response.json()))
            .then((data)=>{setData(data)
                console.log(data)
            }).catch((err)=>{
                setError(err.message)
            })
        },1000)
    },[url])
    return[Data,setData,error]
}
export default UseFetch