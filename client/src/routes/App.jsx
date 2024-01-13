import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import FetchingLogo from '../components/FetchingDataSpinner'
import { useState } from 'react'
function App() {
  const fetchStatus=useSelector(store=>store.fetchStatus);
  const [active,setActive]=useState("home");
  return (
    <>
      <Navbar active={active} setActive={setActive}/>
      { 
       fetchStatus.fetching?<FetchingLogo/>:<Outlet/>
      }
      <Footer/>
    </>
  )
}

export default App
