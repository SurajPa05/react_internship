import CompA from "./Components/CompA"


function App() {

  const user= {name:'Sadhika'}
  return (
    <>
      <CompA name  ={user.name}/>
    </>
  )
}

export default App
