import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Nav from './Component/Nav';
import Login from './Component/Login';
import{BrowserRouter,Route,Routes}from 'react-router-dom'

function App() {
  return (
  <BrowserRouter>
 

   <div>
    <Routes>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Nav' element={<Nav/>}/>
    </Routes>
    
 
    </div>
    </BrowserRouter>
  );
}

export default App;
