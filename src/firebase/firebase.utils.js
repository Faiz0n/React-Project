import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDIuKPJfGAM63Gj2gBb4NGVjKhdgFJ6e00",
    authDomain: "crwn-db-7eaf3.firebaseapp.com",
    projectId: "crwn-db-7eaf3",
    storageBucket: "crwn-db-7eaf3.appspot.com",
    messagingSenderId: "83624549715",
    appId: "1:83624549715:web:1b52d8587e08279d7555a6",
    measurementId: "G-7QZYBH33QR"
  };

export const createUserProfileDocument = async (userAuth,additinalData) =>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if(!snapShot.exists){
        const {displayName, email} = userAuth
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additinalData
            })

        }catch(err){
            console.log('error creating user', err.message)
        }
    }
    return userRef

};


  firebase.initializeApp(config)

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;