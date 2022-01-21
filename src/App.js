import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

//Pages import
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import MiniProjects from './pages/MiniProjects'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/projects' element={<Projects />}/>
            <Route path='/miniprojects' element={<MiniProjects />}/>
            <Route path='/contact' element={<Contact />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
