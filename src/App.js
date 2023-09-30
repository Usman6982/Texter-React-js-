import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/alert';
import Footer from './components/Footer';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import { Route, Routes } from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');//whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const toggleMode = () => {

    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success")
      document.title = 'Texter - Dark Mode';

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      document.title = 'Texter - Light Mode';
    }

  }

  return (
    <>
      <Navbar title="Texter" aboutText="About" cont="Contact Us" pp="Privacy Policy" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">

        <Routes>

          <Route path='/' element={<Textform showAlert={showAlert} heading="Enter the text to analyze " mode={mode} />} />

          <Route path='/about' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} />
        </Routes>
      </div>
      <Footer ></Footer>

    </>
  );
}

export default App;
