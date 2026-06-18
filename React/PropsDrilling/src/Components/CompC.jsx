import CompD from "./CompD"

function CompC(props) {
  return (
    <div style = {{backgroundColor:"yellow",width:"80%",height:"300px"}}>
     <CompD  user = {props.user}/>
    </div>
  )
}

export default CompC