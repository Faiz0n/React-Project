import React from "react";

import './signIn-signUp.styles.scss'

import SignIn from "../../compenents/sign-in/sign-in.component";

import SignUp from "../../compenents/sign-up/sign-up.component";

const SignInAndSignUpPage = ()=>(
    <div className='sign-in-and-sign-up'>
        <SignIn/>  
         <SignUp/>
    </div>
)



export default SignInAndSignUpPage