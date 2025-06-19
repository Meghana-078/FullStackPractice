function Electronics(props){
    return(
        <div class="card">
            <img src={props.image} alt="" height={"300px"} width={"300px"} />
            <p>{props.name}</p>
            <p>{props.price}</p>
        </div>
    )

}
export  default Electronics