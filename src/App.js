import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Science from './pages/Science';
import Sports from './pages/Sports';
import Business from './pages/Business';
import Health from './pages/Health';
import Technology from './pages/Technology';
import General from './pages/General';

function App() {
  return (
    <>
  <Router>
  <Navbar />
    <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/general' element={<General cat="general" />} />
     <Route path='/business' element={<Business cat="business" />} />
     <Route path='/health' element={<Health cat="health" />} />
     <Route path='/sports' element={<Sports cat="sports" />} />
     <Route path='/science' element={<Science cat="science" />} />
     <Route path='/technology' element={<Technology cat="technology" />} />
    </Routes>
  
  </Router>
    </>
  );
}export default App;

