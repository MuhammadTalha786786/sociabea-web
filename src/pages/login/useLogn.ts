import React, { useState } from "react"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



export const useLogin = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false)


  const handlePasswordVisiblity = () => {
    setShowPassword(!showPassword)
  }


  const loginUser =()=>{
    
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });

  }

  console.log(showPassword)

  return {
    email,
    password,
    setEmail,
    setPassword,
    showPassword,
    setShowPassword,
    handlePasswordVisiblity,
    loginUser
  }

}

