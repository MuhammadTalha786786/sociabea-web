import React, { useState } from "react"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setSignIn, setUserInfo } from "../../redux/authReducer/AuthReducer";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";


interface loginUser {
  isLogin: boolean
  email: string
  uid: string
  isLoggedIn: boolean;
  userName: string;
  photoURL: string;
}


export const useLogin = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [isLoading,setIsLoading] = useState<boolean>(false)

  const handlePasswordVisiblity = () => {
    setShowPassword(!showPassword)
  }
  const LoginUser:loginUser = {
    isLogin: true,
    isLoggedIn: true,
    userName: '',
    photoURL: '',
    email: '',
    uid: '',
  };

  const updateLogin =async(uid:string)=>{
    const docRef = doc(db, "users",uid );
    const docSnap:any =  await getDoc(docRef);
    if (docSnap.exists()) {
      updateDoc(docRef, {isLogin:true}).then(()=>{
        console.log(docSnap)
        LoginUser.userName =docSnap.data().name
        LoginUser.photoURL= docSnap.data().image
        LoginUser.email =docSnap.data().email
        LoginUser.uid =docSnap.data().uid
        dispatch(setSignIn({userInfo:LoginUser}))
        setIsLoading(false)
    }).catch((err:any)=>{
      Swal.fire({
        title:err?.message
      })
      setIsLoading(false)
    });
      console.log("Document data:", docSnap.data());
    } else {
      setIsLoading(false)
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
    

  }

  const loginUser =()=>{
    setIsLoading(true);
    
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user,"login user")
          let data ={ 
            user:user,
            isLogin:true
          }

          updateLogin(user?.uid)

       
          // dispatch(setUserInfo({user:data}))  
          // ...
          // dispatch(setSignIn({isLogin:true}))
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          Swal.fire({
            title:errorMessage
          })
          setIsLoading(false)

        });

  }

  // console.log(showPassword)

  return {
    email,
    password,
    setEmail,
    setPassword,
    showPassword,
    setShowPassword,
    handlePasswordVisiblity,
    loginUser, isLoading,
    setIsLoading
  }

}

