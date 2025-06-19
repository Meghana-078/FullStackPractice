import { useEffect, useState } from 'react'
import Books from './Books'
import BookofDoors from './assets/book1.jpeg'
import WishperWicks from './assets/book2.jpeg'
import AnnaJames from './assets/book3.jpeg'
import VanishingBookStore from './assets/book4.jpeg'
import UseFetch from "./UseFetch"

function BooksList(){
    const[Increment,setIncrement]=useState([])
    // const [Book,setimpbook]=useState([
    //     // {
    //     //     id:"1",
    //     //     image:BookofDoors, 
    //     //     name:"BookofDoors",
    //     //     price:"1300"
    //     // },
    //     // {
    //     //     id:"2",
    //     //    image:WishperWicks,
    //     //    name:"wishperWicks",
    //     //     price:"1500"
    //     // },
    //     // {
    //     //     id:"3",
    //     //     image:AnnaJames,
    //     //    name:"Anna James",
    //     //    price:"1100"

    //     // },
    //     // {
    //     //     id:"4",
    //     //    image:VanishingBookStore,
    //     //    name:"Vanishing BookStore",
    //     //    price:"7500"

    //     // }
    // ])
    const[ImpBooks,setImpBooks,error]=UseFetch('http://localhost:3000/Book')
    if(!ImpBooks){
        return(
        <>
        {!error &&<p>Loading...</p>}
        {error && error}
        </>
        )
    }



    function handledelete(id){
        const newbook=ImpBooks.filter((b)=>b.id!=id)
        console.log(newbook)
        setImpBooks(newbook)
        
    }
    const ListBook=ImpBooks.map((b,index)=><Books key={index} image={b.image} name={b.name} price={b.price} delete={handledelete} id={b.id}/>)
    return(
    <>
    {ListBook}
    {/* <button onClick={()=>setIncrement(Increment+1)}>Increment:{Increment}</button> */}
    </>
    )
}
export default BooksList