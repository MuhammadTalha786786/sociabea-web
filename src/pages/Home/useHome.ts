import React from 'react'
import { useDispatch } from 'react-redux'
import { setSignIn } from '../../redux/authReducer/AuthReducer'

export const useHome = () => {

  const dispatch  = useDispatch()

  const logoutuser =() =>{
    dispatch(setSignIn({isLogin:false})) 
  }

  return {
    logoutuser
  }
    
}

