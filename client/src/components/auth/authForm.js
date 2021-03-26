import React, { useState } from 'react';
import { useFormik } from 'formik'
import * as Yup from 'yup';
import Loader from 'utils/loader';

import { useDispatch, useSelector } from 'react-redux';
import { TextField , Button } from '@material-ui/core';


const AuthForm = (props) => {
    const [loading,setLoading] = useState(false);


    const formik = useFormik({
        initialValues:{ email:'',password:'' },
        validationSchema:Yup.object({
            email:Yup.string()
            .required('Sorry the email is required')
            .email('This is an invalid email'),
            password:Yup.string()
            .required('Sorry the email is required')
        }),
        onSubmit:( values)=>{
            console.log(values)
        }
    })



    return(
        <>  
            <div className="auth_container">

            { loading ?
                <Loader/>
                :
                <form className="mt-3" onSubmit={formik.handleSubmit}>
                    
                    <div className="form-group">
                        <TextField
                            style={{width:'100%'}}
                            name="email"
                            label="Enter your email"
                            variant="outlined"  
                            {...formik.getFieldProps('email')}

                        />
                    </div>
                    <div className="form-group">
                        <TextField
                            style={{width:'100%'}}
                            name="password"
                            label="Enter your password"
                            variant="outlined"  
                            type="password"
                            {...formik.getFieldProps('password')}

                        />
                    </div>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        size="small"
                    >
                        { props.formType ? 'Register':'Login'}
                    </Button>

                </form>    
            }


            </div>
        </>
    )
}

export default AuthForm;
