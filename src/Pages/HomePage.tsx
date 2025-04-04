
import Footer from "../shared/Footer"
import { Header } from "./Component/Home/Header"
import { MenuItems } from "./Component/Home/MenuItems"
import { Testimonial } from "./Component/Home/Testimonial"

function HomePage() {
  return (
    <div>
      <Header/>
      <MenuItems/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default HomePage
