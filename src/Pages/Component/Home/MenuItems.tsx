import { Input } from "antd"
import { MenuCarousel } from "./MenuItemList/MenuCarousel"

export const MenuItems = ()=>{
    return(
        <section>
            <div className="container-fluid">
                <div className="row homesearchcontainer">
                    <div className="col-md-6">
                        Welcome to LizExpress where you swap and advertise your service
                    </div>
                    <div className="col-md-6">
                        <div>
                            <Input.Search placeholder="search"/>
                        </div>
                        
                    </div>
                </div>

                <div style={{marginTop:'16px'}}>
                <MenuCarousel/>
                </div>
            </div>
        </section>
    )
}