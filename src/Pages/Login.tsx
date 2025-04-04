import { Formik } from "formik"
import {Input} from 'antd'
import * as Yup from 'yup'
export const Login = ()=>{
    const validateSchema = Yup.object({

    })
    return (
        <section>
            <div className="container-fluid">
                <div>
                    <div className="row">
                        <div className="col-md-6">
                            {
                                <Formik initialValues={{email:'', password:""}}
                                onSubmit={(values)=>console.log(values)}>
                                    {
                                        (props)=>(
                                            <div>
                                                <div className="row">
                                                    <div className="col-6">Sign In</div>
                                                    <div className="col-6">Sign up</div>
                                                </div>
                                                <span>Email</span>
                                                <Input 
                                                value={props.values.email}
                                                onChange={props.handleChange('email') }
                                                 />
                                                 <span>Password</span>
                                                 <Input.Password
                                                 value={props.values.password}
                                                 onChange={props.handleChange('password')}/>
                                                
                                            </div>
                                        )
                                    }
                                </Formik>    
                            }
                        </div>
                        <div className="col-md-6">
                            <h3>Already have an account?</h3>
                            <h1>Log in!</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}