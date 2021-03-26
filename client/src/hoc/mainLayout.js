import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { showToast } from 'utils/tools';

import { useSelector, useDispatch } from 'react-redux';


const MainLayout = (props) => {
    const notifications = useSelector(state => state.notifications)


    useEffect(()=>{
        if(notifications && notifications.error){
            const msg = notifications.msg ? notifications.msg : 'Error';
            showToast('ERROR',msg);
            ///// 
        }
        if(notifications && notifications.success){
            const msg = notifications.msg ? notifications.msg : 'Good job !!';
            showToast('SUCCESS',msg)
        }

    },[notifications])


    return(
        <>
            {props.children}
            <ToastContainer/>
        </>

    )
}

export default MainLayout;