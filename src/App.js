import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Nav from './Component/Nav';
import Login from './Component/Login';
import Homepage from './Component/Homepage';
import{BrowserRouter,Route,Routes}from 'react-router-dom'
import Register from './Component/Register';
import Forgetpassword from './Component/Forgetpassword';
import Trendingsong from './Component/Trendingsong';


function App() {
  return (
  <BrowserRouter>
 

   <div className='bgcolor'>
    <Routes>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Nav' element={<Nav/>}/>
      <Route path='/Homepage' element={<Homepage/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Forget' element={<Forgetpassword/>}/>
      <Route path='/Trending' element={<Trendingsong/>}/>
      
    </Routes>
    
 
    </div>
    </BrowserRouter>
  );
}

export default App;
