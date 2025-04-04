import { Input } from "antd"
import { Formik } from "formik"
import { Link } from "react-router-dom"
import FlatButton from "./FlatButton"


const styles ={
    container:{
        background:'black',
        color:'white',
        padding:'3%'
    }
}
function Footer() {
  return (
    <div style={styles.container}>
      <div className="row">
        <div className="col-md-4" style={{
          display:'flex',
          flexDirection:'column',
          gap:'5px'
        }}>
          <Link to={'/lizexpress'}>Home</Link>
          <Link to={'/lizexpress/browse'}>Browser</Link>
          <Link to={'terms & condition'}>Terms & Condition</Link>
          <Link to={'privacy'}>Privacy policies</Link>
        </div>

        <div className="col-md-4"style={{
          display:'flex',
          flexDirection:'column',
          gap:'5px'
        }}>
          <Link to={'electronics'}>Electronics</Link>
          <Link to={'furniture'}>Furniture</Link>
          <Link to={'#'}>Phone & Accessories</Link>
          <Link to={'#'}>Computer & Accessories</Link>
        </div>


        <div className="col-md-4"style={{
          display:'flex',
          flexDirection:'column',
          gap:'5px'
        }}>
          <h3>Subscribe to Our news letter</h3>
          <Formik
          initialValues={
            {email:''}
          }
          onSubmit={(values)=>{
          console.log(values)
          }}>
            {(props)=>(
              <>
              <Input placeholder="Enter your email" value={props.values.email} onChange={props.handleChange('email')}/>
              <div style={{display:'flex', flexDirection:'column'}}>
                <FlatButton title="submit" onClick={props.handleSubmit}/>
              </div>
              </>
            )}
          </Formik>
        </div>
       
      </div>
      
    </div>
  )
}

export default Footer
