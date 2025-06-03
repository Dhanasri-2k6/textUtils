
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null)
      },3000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled!!","success");
      document.title="TextUtils - Dark Mode";
      // setInterval(()=>{
      //   document.title='TextUtils is amazing mode';
      // },2000);
      // setInterval(()=>{
      //   document.title='Install text utils now';
      // },1500);

    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled!!","success");
      document.title="TextUtils - Light Mode";
    }
  }
  return (
    <>
    <Router>
    <Navbar title="DhanSiriApp" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
          <Route exact path="/about" element={<About />}>
          </Route>
  
          <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>} >
           
          </Route>
        </Routes> 
    </div>
    </Router>
    </>
  );
  
}

export default App;
