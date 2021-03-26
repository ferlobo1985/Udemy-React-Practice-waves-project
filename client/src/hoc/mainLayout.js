import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { showToast } from 'utils/tools';

import { useSelector, useDispatch } from 'react-redux';
import { clearNotification } from 'store/actions/index';


const MainLayout = (props) => {
    const notifications = useSelector(state => state.notifications);
    const dispatch = useDispatch()


    useEffect(()=>{
        if(notifications && notifications.error){
            const msg = notifications.msg ? notifications.msg : 'Error';
            showToast('ERROR',msg);
            dispatch(clearNotification());
        }
        if(notifications && notifications.success){
            const msg = notifications.msg ? notifications.msg : 'Good job !!';
            showToast('SUCCESS',msg);
            dispatch(clearNotification());
        }

    },[notifications,dispatch])


    return(
        <>
            {props.children}
            <ToastContainer/>
        </>

    )
}

export default MainLayout;