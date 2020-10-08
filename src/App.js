import React,{useEffect} from 'react';
import { Switch,Route} from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-up/sign-in-up.component';
import Header from './components/header/header.component';
import { auth,createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

const App = props => {

  const {setCurrentUser} = props;

  var unsubscribeFromAuth=null;

  useEffect(()=> {
    unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth => {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot( snapShot => {
          setCurrentUser({
            id:snapShot.id,
            ...snapShot.data()
          })
        })
      } else {
        setCurrentUser(userAuth)
      }

    })

    return  () => {
      unsubscribeFromAuth();
    }
  },[])

  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/'  component={HomePage}/>
        <Route path='/shop'  component={ShopPage}/>
        <Route path='/signin'  component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch( setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(App);
