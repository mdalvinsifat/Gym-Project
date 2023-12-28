
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Shop from './Shop/Shop';
import Reg from './Reg/Reg';
import Trainer from './Trainer/Trainer';
import LogOut from './LogOut/LogOut';
import NotFound from './Error/NotFound';


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={
     
          <Contact/>
    
      }/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/reg' element={<Reg/>}/>
      <Route path='/trainer' element={<Trainer/>}/>
      <Route path='/login' element={<LogOut/>}/>
      <Route path='/*' element={<NotFound/>}/>
     </Routes>
    </div>
  );
}

export default App;
