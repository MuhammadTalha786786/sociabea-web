import { useEffect, useState } from 'react'
import { ref, getDownloadURL, uploadBytesResumable, getStorage } from "firebase/storage"
import { db } from '../../firebase'
import Swal from 'sweetalert2'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 






function UseRegister() {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [image, setImage] = useState<string>('')
  const [imageToUpload, setImageToUpload] = useState<any>('')
  const [imageURL, setImageURL] = useState<any>('')
  const [isError, setIsError] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const imageChange = (event: any) => {
    setImageToUpload(event.target.files[0]);
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
      
    }
    
      onFirebaseUpload(event.target.files[0])
  }

  console.log()


  useEffect(() => {
    setTimeout(() => {
      setIsError(false)
    }, 5000)
  }, [])



  const onFirebaseUpload = async (image:any) => {
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
          setImageURL(downloadURL)
        });
      }
    );

  };

  const clearData =() =>{
    setImageURL('')
    setImageToUpload('')
    setImage('')
    setName('')
    setEmail('')
    setPassword('')

  }
  console.log(imageURL,"url")

  const writeUserData = async (id:string) => {
    console.log(id)
    await setDoc(doc(db, "users", id), {
      email:email,
      image:imageURL,
      isLogin:false,
      name:name,
      uid:id
    }).then(()=>{
      Swal.fire({
        icon: 'success',
        title: 'Hurrah...',
        text: 'Registration Successfully',
      })
      clearData()
    

    }).catch(()=>{});
  }

  const userRegiter =async () => {
    // onFirebaseUpload()
    if (name == '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Enter your email',
      })
      // setIsError(true)
      // setErrorMessage('Enter your Name')
    }
    else if (email == '') {

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Enter your email',
      })
      // setIsError(true)
      // setErrorMessage('Enter your Email')
    }
    else if (password == '' && password.length < 6) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Enter your six digit assword',
      })
    }
    else if (image == ''  ) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Select your profile image',
      })
    }
    else {
   
        const auth =  getAuth();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user?.uid)
            if(user){
            
           
              writeUserData(user?.uid)
              // window.location.reload()
            }
  
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: errorMessage,
            })
            // ..
          });
        

      
    
     
      




    }

  }


  return {
    name, setName,
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    setShowPassword,
    image,
    setImage,
    imageChange,
    onFirebaseUpload, isError,
    setIsError,
    errorMessage,
    userRegiter

  }

}

export default UseRegister