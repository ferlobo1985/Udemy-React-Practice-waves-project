import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { errorHelper } from 'utils/tools';

import { useDispatch, useSelector } from 'react-redux';
import { updateSiteVars } from 'store/actions/site.action';

import {
    TextField,
    Button
} from '@material-ui/core'

const SiteVars = () => {
    const site = useSelector(state=> state.site);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues:{
            address: site.vars.address,
            phone:site.vars.phone,
            hours:site.vars.hours,
            email:site.vars.email,
        },
        validationSchema:Yup.object({
            address: Yup.string()
            .min(3,'You need to add more')
            .max(100,'You need to add less')
            .required('This is required'),
            phone:Yup.string()
            .max(15,'You need to add less')
            .required('This is required'),
            hours:Yup.string()
            .max(100,'You need to add less')
            .required('This is required'),
            email:Yup.string()
            .email('You need to add a valid email')
            .required('This is required'), 
        }),
        onSubmit:(values)=>{
            dispatch(updateSiteVars(
                {
                    _id: site.vars._id,
                    ...values
                }
            ))
        }
    })


    return(
        <>
            <form className="mt-3" onSubmit={formik.handleSubmit}>

                <div className="form-group">
                    <TextField
                        style={{ widht:'100%'}}
                        name="address"
                        label="Enter the store address"
                        variant="outlined"
                        {...formik.getFieldProps('address')}
                        {...errorHelper(formik,'address')}
                    />
                </div>

                <div className="form-group">
                    <TextField
                        style={{ widht:'100%'}}
                        name="phone"
                        label="Enter the phone"
                        variant="outlined"
                        {...formik.getFieldProps('phone')}
                        {...errorHelper(formik,'phone')}
                    />
                </div>

                <div className="form-group">
                    <TextField
                        style={{ widht:'100%'}}
                        name="hours"
                        label="Enter the hours"
                        variant="outlined"
                        {...formik.getFieldProps('hours')}
                        {...errorHelper(formik,'hours')}
                    />
                </div>

                <div className="form-group">
                    <TextField
                        style={{ widht:'100%'}}
                        name="email"
                        label="Enter the store email"
                        variant="outlined"
                        {...formik.getFieldProps('email')}
                        {...errorHelper(formik,'email')}
                    />
                </div>

                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Edit store information
                </Button>

            </form>
        </>
    )

}

export default SiteVars;