import React, { useEffect,useState } from 'react';
import DashboardLayout from 'hoc/dashboardLayout';

import { useFormik } from 'formik';
import { errorHelper } from 'utils/tools';
import Loader from 'utils/loader'
import { validation } from './formValues';

import { useDispatch, useSelector } from 'react-redux';


import { 
    TextField,
    Button,
    Divider,
    Select,
    MenuItem,
    FormControl,
    FormHelperText
} from '@material-ui/core';


const AddProduct = (props) => {
    const [loading, setLoading] = useState(false);
    const notifications =  useSelector(state=>state.notifications);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues:{
            model:'',
            brand:'',
            frets:'',
            woodtype:'',
            description:'',
            price:'',
            available:'',
            shipping:false
        },
        validationSchema: validation,
        onSubmit:(values)=>{
            console.log(values)
        }
    });


    return(
        <DashboardLayout title="Add product">
        { loading ?
            <Loader/>
            :
            <>
                <form className="mt-3 article_form" >

                        form
                </form>
            </>
        }
        </DashboardLayout>
    )


} 


export default AddProduct;