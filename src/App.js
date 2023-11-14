import './App.css';
import Navbar from './components/Navbar';
import NoteState from './context/notes/NoteState';
import About from './components/About';
import Notes from './components/Notes';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Alert from './components/Alert';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { useState, useEffect } from 'react';

function App() {
  useEffect(() => {
    window.addEventListener('beforeunload', clearLocalStorage);
    return () => {
      window.removeEventListener('beforeunload', clearLocalStorage);
    };
  }, []);

  const clearLocalStorage = () => {
    localStorage.removeItem('token');
  };
  const [alertContent, chgAlertContent] = useState(null);
  const setAlert = (type, message) => {
    chgAlertContent({
      type: type,
      content: message,
    });
    setTimeout(() => {
      chgAlertContent(null);
    }, 1500);
  };
  const pageSize = 9;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0)
  return (
    <>
      <Router>
        <NoteState>
          <Navbar />
          <LoadingBar
            color='#f11946'
            height={3}
            progress={progress}
          />
          <Alert alert={alertContent} />
          <Routes>
            <Route exact path="/gk-prep" element={<Notes setAlert={setAlert} />} />
            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="general" country="in" category="general" />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="business" country="in" category="business" />} />
            <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="entertainment" country="in" category="entertainment" />} />
            <Route exact path='/health' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="health" country="in" category="health" />} />
            <Route exact path='/science' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="science" country="in" category="science" />} />
            <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="sports" country="in" category="sports" />} />
            <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="technology" country="in" category="technology" />} />
            <Route exact path="/notes" element={<Notes setAlert={setAlert} />} />
            <Route exact path="/login" element={<Login setAlert={setAlert} />} />
            <Route exact path="/signUp" element={<SignUp setAlert={setAlert} />} />
          </Routes>
        </NoteState>
      </Router>
    </>
  );
}

export default App;
