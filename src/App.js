import React, { useState } from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";
function App() {

  const toggleMode = () => {
      if(mode ==='light'){
        setMode('dark');
        document.body.style.background='#042743';
        showAlert("Dark Mode Enabled","success");
        document.title = "TextUtils - Dark Mode";
        // setInterval(() => {
        //    document.title = "TextUtils is Amazing";
        // }, 2000);
        // setInterval(() => {
        //   document.title = "Install TextUtils Now";
        // }, 1500);
      }
      else{
        setMode('light');
        document.body.style.background='white'; 
        showAlert("Dark Mode Disablbled","success");
        document.title = "TextUtils - Light Mode";
      }
  }
  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const [ mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  
  return (
    
  <>
  
 {/* <Navbar/> */}
   {/* <Navbar title ="TextUtils" abouttext="About Text Utils"/> */}
   {/* <Router> */}
   <Navbar title ="TextUtils" mode = {mode} toggleMode={toggleMode}/>
   
   <Alert alert={alert}/> 
   <div className="container my-3">
{/*     
              <Switch>
          <Route exact path="/about">
            <About />
          </Route> */}
          
          {/* <Route exact path="/">
          </Route>
              </Switch> */}
          <TextForm heading = "Enter the text to analyze" showAlert={showAlert} mode={mode}/>

              </div>
     {/* </Router> */}

   
  
  </>
  );
}

export default App;
