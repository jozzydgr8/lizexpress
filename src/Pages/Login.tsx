import { Formik } from "formik"

export const Login = ()=>{
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
                                            </div>
                                        )
                                    }
                                </Formik>    
                            }
                        </div>
                        <div className="col-md-6">

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}