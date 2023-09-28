// import from './logo.svg';

import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';  
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');//whether dark mode is enabled or not
  const [ alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    }

    )
  }

  const toggleMode = ()=> {

    if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled","Success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","Success")
    }

  }

  return (  
   <>
    
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="Aboutus"/>
 <Alert alert={alert}/>
<div className="container my-3">
<Textform heading="Enter the text to analyze " mode={mode}></Textform>
{/* <About></About> */}
</div>
{/* parent componet */}
   </>

    
  );
}

export default App;
