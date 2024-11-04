import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"


function Root() {
  return (
    <div className="w-[96vw] mx-auto p-3 border">
        {/* navbar here */}
       <NavBar />
        {/* Outlet here */}
        <Outlet />
        {/* Footer */}
        <Footer />
    </div>
  )
}

export default Root