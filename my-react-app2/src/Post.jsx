import {useState,useEffect} from "react"
import {useParams} from "react-router-dom"


function Post(){
    

    const [posted,setPosted] =useState(null)
    const {id}=useParams()

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/'+id)
        .then(response=>response.json())
        .then(data=>{
            setPosted(data);
            console.log(data)
        }).catch(error=>console.log(error))
    },[id])
    return(
        <>
        {
            posted &&
            <div>
                <h1>Post ID: {id}</h1>
                <h2>Post Title: {posted.title}</h2>
                <h1>
                    User ID: {posted.userid}
                </h1>
                <h1>
                    Body: {posted.body}
                </h1>
            </div>
        }
        
        </>
    )
}
export default Post