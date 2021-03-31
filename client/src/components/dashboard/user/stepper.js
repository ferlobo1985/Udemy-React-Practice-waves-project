import React, {useState, useEffect } from 'react';
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { userChangeEmail } from 'store/actions/user.actions'

import { errorHelper } from 'utils/tools';
import Loader from 'utils/loader';

import Modal from 'react-bootstrap/Modal';

import {
    TextField,
    Button,
    Stepper,
    Step,
    StepLabel
} from '@material-ui/core';


const EmailStepper = ({users}) => {
    const [loading, setLoading] = useState(false);
    const [emailModal, setEmailModal] = useState(false);
    const notifications = useSelector(state=> state.notifications);
    const dispatch = useDispatch();

    const [activeStep, setActiveStep] = useState(0);
    const steps = ['Enter old email','Enter new email','Are you sure ?']


    const formik = useFormik({
        enableReinitialize:true,
        initialValues: { email:'', newemail:''},
        validationSchema:Yup.object({
            email:Yup.string()
            .required('This is required')
            .email('This is not a valid email')
            .test('match','Please check your email',(email)=>{
                return email === users.data.email
            }),
            newemail:Yup.string()
            .required('This is required')
            .email('This is not a valid email')
            .test('match','Please check your email',(newemail)=>{
                return newemail !== users.data.email
            })
        }),
        onSubmit:(values)=>{
            setLoading(true);
            dispatch(userChangeEmail(values));
        }
    });


    const closeModal = () => setEmailModal(false);
    const openModal = () => setEmailModal(true);


    const handleNext = () => {
        setActiveStep((prevActiveStep)=> prevActiveStep + 1 )
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep)=> prevActiveStep - 1 )
    }


    const nextBtn = () => (
        <Button className="mt-3" variant="contained" color="primary" onClick={handleNext}>
            Next
        </Button>
    )


    const backBtn = () => (
        <Button className="mt-3 ml-2" variant="contained" onClick={handleBack}>
            Back
        </Button>
    )


    useEffect(()=>{
        if( notifications && notifications.success){
            closeModal();
        }
        setLoading(false);
    },[notifications])



    return(
        <>
            <form className="mt-3 article_form" style={{maxWidth:'250px'}}>
                <div className="form-group">
                <TextField
                        style={{ width:'100%'}}
                        name="emailstatic"
                        variant="outlined"
                        value={users.data.email}
                        disabled
                    />

                </div>
                <Button
                    className="mb-3"
                    variant="contained"
                    color="primary"
                    onClick={openModal}
                >
                    Edit email
                </Button>
            </form>

            <Modal size="lg" centered show={emailModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Update your email</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                    <Stepper activeStep={activeStep}>
                        { steps.map((label, index)=> {
                            return(
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            )
                        })}
                    </Stepper>
                    <form className="mt-3 stepper_form" onSubmit={formik.handleSubmit}>
                    { activeStep === 0 ?
                        <div className="form-group">
                            <TextField
                                style={{ width:'100%'}}
                                name="email"
                                label="Enter your current email"
                                variant="outlined"
                                {...formik.getFieldProps('email')}
                                {...errorHelper(formik,'email')}
                            />
                             {  formik.values.email && !formik.errors.email ?
                                nextBtn()
                                :null
                            }
                        </div>
                    :null}

                    { activeStep === 1 ?
                        <div className="form-group">
                            <TextField
                                style={{ width:'100%'}}
                                name="newemail"
                                label="Enter your new email"
                                variant="outlined"
                                {...formik.getFieldProps('newemail')}
                                {...errorHelper(formik,'newemail')}
                            />
                            {  formik.values.newemail && !formik.errors.newemail ?
                                nextBtn()
                                :null
                            }
                            { backBtn()}
                        </div>
                    :null}
                    { activeStep === 2 ?
                        <div className="form-group">
                            { loading ?
                                <Loader/>
                                :
                                <>
                                    <Button
                                        className="mt-3"
                                        variant="contained"
                                        color="primary"
                                        onClick={formik.submitForm}
                                    >
                                        Edit email
                                    </Button>
                                    {backBtn()}
                                </>
                            }
                        </div>
                    :null}
                    </form>

                </Modal.Body>
            </Modal>

        </>
    )
    
}

export default EmailStepper;
