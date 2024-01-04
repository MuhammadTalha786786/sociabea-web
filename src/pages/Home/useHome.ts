import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSignIn } from '../../redux/authReducer/AuthReducer'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase';



export const useHome = () => {

  const dispatch  = useDispatch()
  const [postData, setPostData] = useState([])

  const logoutuser =() =>{
    dispatch(setSignIn({isLogin:false})) 
  }


  useEffect(()=>{
    getPostData()
  },[])


  const getPostData = async()=>{
    const querySnapshot = await getDocs(collection(db, "posts"));
    let temp:any =[]
    querySnapshot.forEach((doc) => {
      temp.push(doc.data())
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data())
      
    });
    setPostData(temp)
  }

   const likePost =()=>{
    
   }

  return {
    logoutuser,
    postData, 
    getPostData
  }
    
}

