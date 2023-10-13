import React from 'react'
// import './style.css'
import { useHome } from './useHome'
import SociaCard from './components/SociaCard'
import Header from '../../components/Header'
function Home() {

  const {
    logoutuser,
    postData
  } = useHome()

  console.log(postData)
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
      {
        postData.map((x) => {
          return (
            
            <SociaCard logoutUser={logoutuser}  item={x} />
            )
            
            
          })
        }
    </div>
        </>


  )
}

export default Home