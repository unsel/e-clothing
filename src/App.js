import React,{useState,useEffect} from 'react';
import { Switch,Route} from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-up/sign-in-up.component';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';

const App = () => {

  const [currentUser,setCurrentUser] = useState(null);
 
  var unsubscribeFromAuth=null;

  useEffect(()=> {
    unsubscribeFromAuth= auth.onAuthStateChanged(user => {
      setCurrentUser(user);

      console.log(user);
    })

    return  () => {
      unsubscribeFromAuth();
    }
  },[])


  return (
    <div>
      <Header currentUser={currentUser}/>
      <Switch>
        <Route exact path='/'  component={HomePage}/>
        <Route path='/shop'  component={ShopPage}/>
        <Route path='/signin'  component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  )
}

export default App;
