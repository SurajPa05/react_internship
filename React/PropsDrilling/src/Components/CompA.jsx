import CompB from "./CompB"

function CompA(props) {
    
  return (
    <div style = {{backgroundColor:"lightblue",width:"100%",height:"500px"}} >
      <CompB user ={props.name}/>
    </div>
  )
}

export default CompA
