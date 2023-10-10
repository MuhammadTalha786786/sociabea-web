import React from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {   useDispatch} from 'react-redux';
import { setSignIn, setUserInfo } from '../redux/authReducer/AuthReducer';




const UseGoogleSIgnIn = () => {
  const dispatch = useDispatch()
  const SignInWithGoogle = () => {
    const provider = new GoogleAuthProvider();


    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        dispatch(setSignIn({isLogin:true}))
        dispatch(setUserInfo({user:user}))  
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
    }


    return {

      SignInWithGoogle
    }

  }

  export default UseGoogleSIgnIn