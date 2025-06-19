import { useEffect, useState } from "react"
import Login from "./Login"
import { Link, useNavigate } from "react-router-dom"
import Post from "./Post"

function Home(){
    const[api,setapi]=useState([])

    const navigate = useNavigate()
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((respose) => respose.json())
        .then((data) => setapi(data))
        .catch((err)=>console.log(err))
    },[])
    
    return(
        <>
        <h1>Home Page</h1>

            <Link className="btn btn-warning" to='/login'>Login</Link>
            <a className="btn btn-danger" heref="http://localhost:5173/login">Login from A</a>

            <ul>
            {api.map((d)=>(
                <li key={d.id} onClick={()=>navigate('/post/'+d.id)}>
                     {d.title}-{d.userId}
                    </li>
                ))}
            </ul>
            <Login/>
            </>
        )
}

export default Home