import React from 'react'
// import './style.css'
import { useHome } from './useHome'
import SociaCard from './components/SociaCard'
import Header from '../../components/Header'
import CreatePostBox from './components/CreatePost'
function Home() {

  const {
    logoutuser,
    postData,
    getPostData
  } = useHome()
  

  return (
    <>
    <Header logoutuser={logoutuser}/>
    <div
      style={{
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
        // height: '100vh',

      }}>
        <div style={{marginTop:100}}>
           <CreatePostBox/>
        </div>
        <div  style={{marginTop:20}}>

      {
        postData.map((x) => {
          return (
            
            <SociaCard  getPostData={getPostData} logoutUser={logoutuser}  item={x} />
            )
            
            
          })
        }
        </div>
    </div>
        </>


  )
}

export default Home