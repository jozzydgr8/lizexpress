import FlatButton from "../../../shared/FlatButton"
import {StarFilled, UserOutlined} from '@ant-design/icons'
import { Carousel } from "./Carousel"
export const Testimonial = ()=>{
    const styles = {
        container:{
            backgroundColor:'#F5F5F5',
            border:'solid 1px #F5F5F5',
        },
        content:{
            backgroundColor:'white',
            margin:'3% 5%',
            padding:'3%',
            borderRadius:'17px'
        },
        usericon:{
            fontSize:'30px',
           
            
        }
    }
    return(
        <section style={styles.container}>
            <div  style={styles.content}>
            <div className="testimonialcontainer">
                <div className="row">
                    <div className="col-md-4"
                    style={{
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center',
                        flexDirection:"column"

                    }}>
                        <div style={{...styles.usericon, display:'flex', flexDirection:"column", alignItems:'center'}}>
                            <div style={{fontSize:'18px', color:'white', backgroundColor:'black', padding:'2px', borderRadius:'5px', border:'solid 2px white'}}><StarFilled/><StarFilled/><StarFilled/></div>
                            <UserOutlined/>
                        </div>
                        <h3>Testimonials</h3>
                        <p style={{textAlign:'center'}}>
                            Hear what others are saying about us....
                        </p>
                    </div>
                    <div className="col-md-8">
                        <Carousel/>
                    </div>
                </div>
            </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        Will you Like to get what you want with what you have spending 
                        little or NO CASH???
                    </div>
                    <div className="col-6">
                        <FlatButton title="CLICK HERE NOW!" onClick={()=>(console.log('testimonial'))}/>
                    </div>
                </div>
            </div>
        </section>
    )
}