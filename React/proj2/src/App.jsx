
import Navbar from '../components/nav.jsx'
import Footer from '../components/footer.jsx'
import LoginPage from '../Pages/Login.jsx'
import SignupPage from '../Pages/Signup.jsx'
import HomePage from '../Pages/Home.jsx'
import {Routes,Route} from 'react-router-dom'
import { Root } from 'postcss'


function App() {
  return(
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element = {<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/addProduct" element={<addProduct />} />
      </Routes>
      <Footer />
    </>
  )
}
export default App