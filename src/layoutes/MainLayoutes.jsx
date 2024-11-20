import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"


const MainLayoutes = () => {
  return (
    <div className="font-bold ">
      <div className="min-h-full bg-base-100">
        <Navbar/>
      </div>
      <div className="min-h-screen m-10">
        <Outlet />
      </div>
      <div>
       <Footer/>
      </div>
    </div>
  )
}

export default MainLayoutes
