//rfce

function Card(props) {
  return (
    <div  style ={{backgroundColor:"green",height:"400px",width:"300px"}}>
        <h1>{props.name}</h1>
        <h2>{props.price}</h2>
        <h3>{props.details}</h3>
    </div>

  )
}

export default Card