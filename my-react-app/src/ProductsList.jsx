import Products from "./Products"
import Laptop from './assets/image.png'
import Facebook from './assets/facebook.jpg'
import Google from './assets/google.jpg'

function ProductsList(){
    const Product=[
        {
            id:"1",
            image:Laptop, 
            name:"computer",
            price:"1300"
        },
        {
            id:"2",
           image:Facebook,
           name:"Facebook",
            price:"1500"
        },
        {
            id:"3",
            image:Google,
           name:"Google",
           price:"1500"

        }
    ]
    Product.sort((x,y)=>y.price-x.price)
    const ListofProducts= Product.map((product)=><Products key={product.id} image={product.image} name={product.name} price={product.price}/>)
   
    return(
        <>
        {ListofProducts}
        </>
    )
}
export default ProductsList