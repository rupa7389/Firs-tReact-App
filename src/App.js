import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
// import About from './component/About';
import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  // Switch,
  // Link
} from 'react-router-dom';
import About from './component/About';
import Alert from './component/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert]=useState(null)

 const showAlert =(message, type)=>
 {
  setAlert({
    msg:message,
    type: type
  })

  setTimeout(() => {
    setAlert(null)
  }, 2000);
 }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("light mode enabled", "success")
    }
  }
  return (
    <>
     <BrowserRouter>
       <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
       <Alert alert={alert}/>
        <div className="container" my-3>
          <Routes>
          <Route exect path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra spaces" mode={mode} />}>   
            </Route>
            <Route exect path="/about" element={<About mode={mode}/>} >
            </Route>
            </Routes>
          {/* </Routes> */}
          {/* <TextForm heading="Enter the text to anlyze" mode={mode} />
          <About/> */}
        </div>
        </BrowserRouter>
    </>
  );
}

export default App;
