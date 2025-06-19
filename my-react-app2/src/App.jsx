import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Login from "./Login"
import LoginPage from "./LoginPage"
import SignUp from "./SignUp"
import {toast} from "react-toastify"
import Profile from "./Profile"
function App(){
  return(
    <>
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/loginpage' element={<LoginPage/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Profile' element={<Profile/>}/>
      </Routes>
    </Router>
    </>
  )
}
export default App