import React from 'react'

import {Routes,Route} from 'react-router-dom'

import './App.css';

import Header from './compenents/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shopPage/shop.component';
import SignInAndSignUpPage from './pages/signIn-signUp/signIn-signUp.component';

import   {auth}  from './firebase/firebase.utils'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged(user =>{
      this.setState({currentUser:user})

      console.log(user)
    })
  }

componentWillUnmount(){
  this.unsubscribeFromAuth()
}

  render(){ 
  return(
    <div>
      <Header currentUser = {this.state.currentUser} />
<Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<ShopPage/>} />
        <Route path="/signin" element={<SignInAndSignUpPage/>} />
</Routes>
    </div>
  )
}
}

export default App;
