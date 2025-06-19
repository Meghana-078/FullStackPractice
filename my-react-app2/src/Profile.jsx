import {auth,db} from "./Firebase"
import {getDoc,doc} from 'firebase/firestore'
import {toast} from "react-dom"
import { useState,useEffect } from "react"



function Profile(){

    const[userdetails,setuserdetails]=useState(null)
    const fetchuserdetails = async()=>{
        auth.onAuthStateChanged(async(user)=>{
            console.log(user)
            const docRef =doc(db,"Users",user.uid)
            const docSnap = await getDoc(docRef)
            if(docSnap.exists()){
                setuserdetails(docSnap.data())
            }else{
                console.log("user not logged in ")
            }
        })
    }
    useEffect(()=>{
    fetchuserdetails()},[])
    async function Logout() {
        try{
            await auth.signOut()
            window.location.href='/LoginPage'
        }catch(err){
            console.log(err.message)
        }
        
    }

    return(
        <div>
        <h1>Profile</h1>
        {userdetails ? (<>
            <h1>Welcome to {userdetails.firstname}</h1>
            <div>
                <p>{userdetails.email}</p>
                <p>{userdetails.firstname}</p>
                <p>{userdetails.lastname}</p>
            </div>
            <button onClick={Logout}>Logout</button> 
            </>) : (
                <p>Loading...</p>
            )}
           
        </div>
    )
}
export default Profile