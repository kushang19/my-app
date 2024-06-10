import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#022b5e';
      showAlert("Dark mode Enabled", "success")
      document.title = "TextUtils - Dark mode";

      // setInterval(() => {
      //   document.title = "TextUtils is Amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils now";
      // }, 1500);
    }
    else{
      setMode('light'); 
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode Enabled", "success")
      document.title = "TextUtils - Light mode";
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About Text"  mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      {/* <Navbar /> */}
      <div className="container my-3">
        {/* <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<TextForm heading="Enter the text to Analyze below" showAlert={showAlert} mode={mode} />} />
        </Routes> */}
        <TextForm heading="Enter the text to Analyze below" showAlert={showAlert} mode={mode} />
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
