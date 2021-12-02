import React from 'react'

import {Routes, Route, Navigate} from 'react-router-dom'
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';

import './App.css';

import Header from './compenents/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shopPage/shop.component';
import SignInAndSignUpPage from './pages/signIn-signUp/signIn-signUp.component';

import   {auth, createUserProfileDocument}  from './firebase/firebase.utils'

class App extends React.Component{
  unsubscribeFromAuth = null;

  componentDidMount(){
     
    const {setCurrentUser} = this.props

    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth =>{
           if(userAuth){
             const userRef = await createUserProfileDocument(userAuth)
            
            userRef.onSnapshot(snapShot =>{
            setCurrentUser({
                currentUser:{
                  id: snapShot.id,
                  ...snapShot.data()
                }
              }, ()=>{
                //  console.log(this.state);
              })
            });
           }else{
             setCurrentUser(userAuth)
           }

    })
  }

componentWillUnmount(){
  this.unsubscribeFromAuth()
}

  render(){ 
  return(
    <div>
      <Header />
<Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<ShopPage/>} />
        <Route exact path="/signin" 
        element={
          this.props.currentUser ? (
        <Navigate replace to='/'/>
        ) : (
        <SignInAndSignUpPage/>
        )
        } 
        />
</Routes>
    </div>
  )
}
}

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

const mapStateToProps = ({user}) =>({
  currentUser: user.currentUser
})



export default connect(mapStateToProps, mapDispatchToProps)(App)
