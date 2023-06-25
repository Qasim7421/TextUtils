
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [darkMode,disableDarkMode] = useState('light')
  const [alert,setAlert] = useState(null);
  const toogleMode = ()=>{
    if(darkMode == 'light')
    {    
      disableDarkMode('dark')
      document.body.style.backgroundColor = "#48637e";
      showAlert('Dark Mode Has Been Enabled','info')
    }
    else 
    {
    disableDarkMode('light')
      document.body.style.backgroundColor = "white"; 
      showAlert('Light Mode Has Been Enabled','warning')
    }
  }
  const showAlert = (message,type)=>{
      setAlert({
        msg: message,
        type: type
      });
      setTimeout(()=>{
        setAlert(null);
      },1500)
  }
  return (
    <>
    <Router>
        <Navbar title="TextUtils"  mode={darkMode} toogleMode ={toogleMode}/>
        <Alert alert={alert}/>
       <Routes>
        <Route path='/' element={<TextForm heading="Enter Text To Analyze Changes!"  showAlert = {showAlert} mode={darkMode}   />}/>
             
         <Route path='/about' element={<About />}/>
             
      </Routes>
    </Router>
    </>
  );
}

export default App;
