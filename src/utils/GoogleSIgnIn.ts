import React from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {   useDispatch} from 'react-redux';
import { setSignIn, setUserInfo } from '../redux/authReducer/AuthReducer';
import Swal from 'sweetalert2';

interface googleSignI {
  setIsLoading:(e:boolean) => void
}


const UseGoogleSIgnIn = (props:googleSignI) => {

  const {setIsLoading} =props
  const dispatch = useDispatch()
  const SignInWithGoogle = () => {
   setIsLoading(true)

    const provider = new GoogleAuthProvider();


    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        console.log(user, "google sign in user")
           
        const LoginUser = {
          isLogin: true,
          email: user?.email,
          userName: user?.displayName,
          uid: user?.uid,
          photoURL: user?.photoURL,
          isLoggedIn:true
        };



        console.log(LoginUser,"login user")
        dispatch(setUserInfo({userInfo:LoginUser}))
        setIsLoading(false)
  
        // dispatch(setSignIn({isLogin:true}))
        window.location.replace('/')

      }).catch((error) => {
        setIsLoading(false) ;

        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        Swal.fire(
          'Error!',
          `${errorMessage}`,
          'error'
        )  
      });
    }


    return {

      SignInWithGoogle
    }

  }

  export default UseGoogleSIgnIn