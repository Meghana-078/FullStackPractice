import { useState } from "react"
import { Link } from "react-router-dom"
import {auth} from "./Firebase"
import SignUp from "./SignUp"
import { signInWithEmailAndPassword } from "firebase/auth"
import { toast } from "react-toastify"


function LoginPage(){
    const[email,setemail]=useState("")
    const[password,setpassword]=useState("")

   const handlesubmit=async(e)=>{
       e.preventDefault()
       auth.onAuthStateChanged(async(user)=>{
        await signInWithEmailAndPassword(auth,email,password)
        window.location.href="/Profile"
        if(user){
            console.log(user)
            console.log("user logged in sucessfully")
            toast.success("user logged in sucessfully",{
                position:"top-right"
            })
        }
       })
    }
    return<>
    <div className="container">
        <div className="card">
            <center><h2>Login</h2></center>
            <form action="" onSubmit={handlesubmit}>
                <div className="email">
                <label htmlFor="email">Email</label>
                <br></br>
                <input type="email"
                id="email"
                value={email}
                name="email-identifier"
                placeholder="Email"
                onChange={(e)=>setemail(e.target.value)}
                />
                </div>
                <br></br>
                <div className="password">
                <label htmlFor="password">Password</label>
                <br></br>
                <input type="password" 
                id="password"
                value={password}
                name="password-identifier"
                placeholder="Password"
                onChange={(e)=>setpassword(e.target.value)}
                />
                </div>
                <button type="submit">Login</button>
                <h6>New User ?<Link to="/SignUp">Register</Link></h6>
            </form>
        </div>
    </div>
    </>
}
export default LoginPage