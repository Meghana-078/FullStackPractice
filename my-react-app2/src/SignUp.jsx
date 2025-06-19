import { useState } from "react"
import { auth ,db} from "./Firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import {toast} from "react-toastify"
import {setDoc,doc} from "firebase/firestore"
function SignUp(){
    const[firstname,setfirstname]=useState("")
    const[lastname,setlastname]=useState("")
    const[email,setemail]=useState("")
    const[password,setpassword]=useState("")
   async function handlesubmit(e){
        e.preventDefault();
        try{
            await createUserWithEmailAndPassword(auth,email,password);
            const user=auth.currentUser;
            if(user){
                await setDoc(doc(db,"Users",user.uid),{
                    email:email,
                    firstname:firstname,
                    lastname:lastname
                })
            }
            console.log("User registered:",user)
            toast.success("user registered sucessfully",{
                position:"bottom-center"
            })
            }catch(err){
                console.log("Error:",err.message)
                toast.error(err.message,{
                    position:"bottom-center"
                })
    }
}
    return<>
    <div className="container1">
        <div className="card1">
            <center><h2>Sign Up</h2></center>
            <form action="" onSubmit={handlesubmit}>
            <div className="FirstName">
                <label htmlFor="firstname">First Name</label>
                <br></br>
                <input type="text"
                id="firstname"
                value={firstname}
                name="firstname-identifier"
                placeholder="First Name"
                onChange={(e)=>setfirstname(e.target.value)}
                />
                </div>
                <div className="LastName">
                <label htmlFor="lastname">Last Name</label>
                <br></br>
                <input type="text"
                id="lastname"
                value={lastname}
                name="lastname-identifier"
                placeholder="Last Name"
                onChange={(e)=>setlastname(e.target.value)}
                />
                </div>
                <br></br>
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
                <button type="submit">Register</button>
            </form>
        </div>
    </div>
    </>
}
export default SignUp