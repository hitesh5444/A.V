import './App.css';
import Login from './Component/Login';
import Navigation from './Component/Navigation';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Search from './Component/Search';
import Ragister from './Component/Ragister';
import Extra from './Component/Extra';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="Button">
      {/* <input type="submit"  value="Login" /> */}
      <button className="get">
      <Link to="/Login"><b>Login</b></Link>
      </button>
      {/* <input type="submit"  value="Ragister" /> */}
      <button className="get1">
      <Link to="/Ragister"><b>Ragister</b></Link>
      </button>
      </div>

      <Routes>
      <Route path="/" element={<Extra/> }></Route>
            <Route path="/Login" element={<Login/> }></Route>
            <Route path="/Ragister" element={<Ragister/> }></Route>
          </Routes>
        
      {/* <Navigation/> */}
      {/* <Search/> */}
    </div>
  </Router>
  );
}

export default App;
