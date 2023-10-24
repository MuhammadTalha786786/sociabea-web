import React, { useEffect, useState } from 'react'
import { SocilCardHook } from '../type'
import { useSelector } from 'react-redux'
import { doc, setDoc, updateDoc } from 'firebase/firestore'
import { db } from '../../../firebase'
import Swal from 'sweetalert2'

export const useSociaCard= (props:SocilCardHook)=> {
     

    const [tempLikes, setTempLikes]= useState(props?.props?.item?.likes)
    const [tempComments,setTempComments] = useState([])
    const loginUser =  useSelector((state:any)=>state.auth?.userInfo)
    const likedPost = props?.props?.item?.likes?.find(x => x.userID == loginUser?.uid && x.isLike == true)
    const likesLength = props?.props?.item?.likes?.filter(x =>  x.isLike == true)
    

   

    

    useEffect(()=>{
      setTempLikes(props?.props?.item?.likes)
    },[])


    const addComment =()=>{
      let commentID =  []
 
       

    }
    
    const addPostLiked = (e:any) => {
      e.preventDefault()

         
       
        if (tempLikes?.length > 0) {
          let findCurrent = tempLikes.some(item => item.userID === loginUser?.uid  )  ;
          console.log(findCurrent,'sdsdsdsdsdds')
          if (findCurrent ) {
            
            const upd_obj = tempLikes.map(obj => {
    
              if (obj.userID == loginUser?.uid) {
                obj.isLike = !obj.isLike;
              }
              return obj;
            })    
            setTempLikes(upd_obj);
            const docRef = doc(db, "posts", props?.props?.item?.postID);

              let data ={
                likes: tempLikes,
              }
             updateDoc(docRef, data).then(()=>{
                // Swal.fire({
                //   icon: 'success',
                //   title: 'Hurrah...',
                //   text: 'Registration Successfully main else callesd' ,
                // })
            }).catch(()=>{});

             
          }  else {
            tempLikes?.push({
              userID: loginUser?.uid ? loginUser?.uid:"#555550099",
              postDetail: props?.props?.item?.postDetail ? props?.props?.item?.postDetail:"test",
              userName: loginUser?.userName ? loginUser?.userName:"name",
              userProfileImaege: loginUser?.photoURL ? loginUser?.photoURL:"phot",
              timeLiked: new Date(),
              isLike: true
            });
            const docRef = doc(db, "posts", props?.props?.item?.postID);

              let data ={
                likes: tempLikes,
              }
              console.log(data,"data")
             updateDoc(docRef, data).then(()=>{
                // Swal.fire({
                //   icon: 'success',
                //   title: 'Hurrah...',
                //   text: 'Registration Successfully main else called' ,
                // })
            }).catch(()=>{});
        }

          }

         
        
        else {
            tempLikes?.push({
              userID: loginUser?.uid ? loginUser?.uid:"#555550099",
              postDetail: props?.props?.item?.postDetail ? props?.props?.item?.postDetail:"test",
              userName: loginUser?.userName ? loginUser?.userName:"name",
              userProfileImaege: loginUser?.photoURL ? loginUser?.photoURL:"phot",
              timeLiked: new Date(),
              isLike: true
            });

            const docRef = doc(db, "posts", props?.props?.item?.postID);

            let data ={
              likes: tempLikes,
            }
           updateDoc(docRef, data).then(()=>{
              // Swal.fire({
              //   icon: 'success',
              //   title: 'Hurrah...',
              //   text: 'Registration Successfully main else called www' ,
              // })
          }).catch(()=>{});
        }


            
          
        
        
      };
    
    
    

    return {
      likesLength,
        likedPost,
        addPostLiked
 }
}

// export default useSociaCard