import CompC from "./CompC"

function CompB(props) {
  return (
    <div style = {{backgroundColor:"lightgreen",width:"95%",height:"400px"}}>
     <CompC user = {props.user}/>
    </div>
  )
}

export default CompB