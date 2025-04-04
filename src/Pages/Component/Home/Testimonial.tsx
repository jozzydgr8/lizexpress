import FlatButton from "../../../shared/FlatButton"
import {UserOutlined} from '@ant-design/icons'
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
                        <div style={styles.usericon}>
                            <UserOutlined/>
                        </div>
                        <h3>Testimonials</h3>
                        <p style={{textAlign:'center'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, cum.</p>
                    </div>
                    <div className="col-md-8">
                        carousel
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