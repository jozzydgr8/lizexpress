import { Outlet } from "react-router-dom"
import Navbar from "./shared/Navbar"
import CopyRight from "./shared/CopyRight"

function Layout() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <CopyRight/>
    </div>
  )
}

export default Layout
