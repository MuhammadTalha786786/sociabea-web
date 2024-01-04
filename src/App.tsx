
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { initializeApp } from 'firebase/app';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Home from './pages/Home/Home';
import { useSelector } from 'react-redux';



const App = () => {
  const appState: any = useSelector((state: any) => state?.auth?.userInfo)
  console.log(appState?.isLogin, "app state ")

  const firebaseConfig = {
    apiKey: "AIzaSyCDjZfOPANsU4OS1nCXwQH32HCrkY9h4cY",
    authDomain: "praticeapp-10164.firebaseapp.com",
    databaseURL: "https://praticeapp-10164-default-rtdb.firebaseio.com",
    projectId: "praticeapp-10164",
    storageBucket: "praticeapp-10164.appspot.com",
    messagingSenderId: "135769240823",
    appId: "1:135769240823:web:fb1c3c92c1412992d80ff2",
    measurementId: "G-S44FLBEH8Q"
  };
  initializeApp(firebaseConfig);



  return (

    <Router basename={process.env.PUBLIC_URL}>
      <Routes>

        {!appState?.isLogin &&
          <>
            <Route path={'/'} element={<Login />} />

            <Route path='/Register' element={<Register />} />
          </>

        }
        {appState?.isLogin && <Route path='/' element={<Home />} />}
      </Routes>
    </Router>


  );
}

export default App;

