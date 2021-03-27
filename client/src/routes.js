import React, { useEffect, useState } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import MainLayout from './hoc/mainLayout';
import Loader from 'utils/loader';

import { useDispatch, useSelector } from 'react-redux';
import { userIsAuth ,userSignOut } from 'store/actions/user.actions';

import Header from './components/navigation/header';
import Footer from './components/navigation/footer';
import Home from './components/home';
import RegisterLogin from './components/auth'

import Dashboard from './components/dashboard';


const Routes = (props) => {
  const [loading, setLoading] = useState(true);
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();


  const signOutUser = () => {
    dispatch(userSignOut())
  }


  useEffect(() => {
    dispatch(userIsAuth())
  }, [dispatch])


  useEffect(()=>{
    if(users.auth !== null){
      setLoading(false)
    }
  },[users])


  return (
    <BrowserRouter>
      { loading ?
        <Loader full={true} />
        :
        <>
          <Header 
            users={users}
            signOutUser={signOutUser}
          />
          <MainLayout>
            <Switch>
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/sign_in" component={RegisterLogin} />
              <Route path="/" component={Home} />
            </Switch>
          </MainLayout>
          <Footer />
        </>
      }


    </BrowserRouter>
  );
}

export default Routes;
