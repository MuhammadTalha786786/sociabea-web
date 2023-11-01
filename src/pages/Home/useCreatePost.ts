import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { loginUserI } from './type'
import { v4 as uuidv4 } from 'uuid';
import { ref, getDownloadURL, uploadBytesResumable, getStorage } from "firebase/storage"
import { db } from '../../firebase'
import { doc, setDoc } from 'firebase/firestore'
import Swal from 'sweetalert2'


export const useCreatePost = () => {
   
   const [image, setImage] = useState('')
   const [postDetail, setPostDetail] = useState<string>('')
   const loginUser = useSelector((state:loginUserI)=>state.auth)
   const [postImage, setPostImage] =  useState<string>('')
   const [imageUploading, setImageUploading] = useState<boolean>(false)
   const  isDisabled =  image == '' && postDetail == ''  && imageUploading;
   // console.log((image == '') && (postDetail == ''))
     
    const postSent =async ()=>{
      setImageUploading(true)
      let  id = uuidv4()
      const postData = {
         userID: loginUser?.userInfo?.uid,
         userImage: loginUser?.userInfo?.photoURL,
         userName: loginUser?.userInfo?.userName,
         postImage: postImage,
         postDetail: postDetail,
         dateCreated: new Date(),
         postID:id ,
         likes: [],
         comments: [],
         isLogin: loginUser?.userInfo?.isLogin,
       };

       await setDoc(doc(db, "posts", id), postData ).then(()=>{
         Swal.fire({
           icon: 'success',
           title: 'Hurrah...',
           text: 'post has been added  Successfully',
         })
         setImageUploading(false)
         // clearData()
       
   
       }).catch(()=>{

       });


    }


    const handleChange = (e:any)=> {
      if (e.target.files.length) {
        setImage(URL.createObjectURL(e.target.files[0]))
      }
      onFirebaseUpload(e.target.files[0])
    };

    const selectFile  =()=>{
      let element: HTMLElement = document.getElementById('My_File') as HTMLElement;
      element.click();
      
    }


    const onFirebaseUpload = async (image:any) => {
      setImageUploading(true)
      const storage = getStorage();
  
      const storageRef = ref(storage, `${image?.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);
  
      uploadTask.on("state_changed",
        (snapshot) => {
          console.log(snapshot)

        },
        (error) => {
          alert(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log(downloadURL, "firebase url")
            setPostImage(downloadURL)
            setImageUploading(false)
          });
        }
      );
  
    };

 return{
    loginUser,
    postDetail,
    setPostDetail, 
    image,
    setImage,
    handleChange,
    selectFile, 
    postImage, 
    setPostImage,
    postSent,
    isDisabled, 
    imageUploading
 }
}
