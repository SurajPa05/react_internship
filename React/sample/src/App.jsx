import './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Error from './Pages/Error'
import Profile from './Pages/Profile'
import {Routes,Route} from "react-router-dom"


function App() {
 
  return (
    <>
    <Routes>
      <Route path ="/" element = {<Home/>}/>
        <Route path ="/Login" element = {<Login/>}/>
          <Route path ="/*" element = {<Error/>}/>
          <Route path ="/Profile" element = {<Profile/>}/>
    </Routes>
    </>
  )
}

export default App
