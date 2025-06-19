import { useState } from "react"
import Counter from "./Counter"
function Login(){
    const [pwd1,setpwd1]=useState('')
    const [pwd2,setpwd2]=useState('')
    const [same,setsame]=useState(true)
    function handlePassword1(event){
        setpwd1(event.target.value)
        console.log(event.target.value)
    }
    function handlePassword2(event){
        setpwd2(event.target.value)
        console.log(event.target.value)
    
        if(pwd1== event.target.value){
            setsame(true)
        }
        else{
            setsame(false)
        }
    }


return(
    <>
    <form>
    <div className="mb-3">
      <label htmlFor="email" className="email">Email address</label>
      <input type="email" className="email" id="email" placeholder="name@example.com"/>
    </div>
    <div className="mb-3">
      <label htmlFor="password1" className="htmlForm-label">Password</label>
      <input value={pwd1} onChange={handlePassword1} type="type" className="htmlForm-control" id="examplehtmlFormControlInput1" placeholder="Password"/>
    </div>
    <div className="mb-3">
      <label htmlFor="password2" className="htmlForm-label">Re-Enter password</label>
      <input value={pwd2} onChange={handlePassword2} type="type" className="htmlForm-control" id="password2" placeholder="Password"/>
      {!same && <p>"Do not Same"</p>}
    </div>

    </form>
    <Counter/>
    </>
)
}
 export default Login
