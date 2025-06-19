

function Products(props){
    return(
        <>
        {<div class="card">
        <img src={props.image} alt="" height={"200px"} width={"200px"} />
        <p>{props.name}</p>
        <p>{props.price}</p>
        </div>}
        </>

    )
}

export default Products