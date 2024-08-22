import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import { useEffect } from "react"
import axios from "axios"
import {useDispatch,useSelector} from "react-redux"
import {login} from "./stores/authSlice"
function App() {
  const dispatch=useDispatch()
  const getUser=async ()=>{
    try{
       const user=await axios("http://localhost:5000/login/success", { withCredentials: true })
       console.log(user.data.user)
       dispatch(login(user.data.user))
    }
    catch(e){
      console.log(e)
    }
  }
  useEffect(()=>{
    getUser()
  },[])
  return (
   <div>
    <Navbar/>
    <Outlet/>
   </div>
  )
}

export default App
