import Navbar from "./Components/Shared/Navbar";
import Footer from "./Components/Shared/Footer";
import Home from "./Components/Home/Home";
import Presentation from "./Components/Presentation/Presentation"
import Project from "./Components/Project/Projects";
import Adhesions from "./Components/Adhesion/Adhesions";
import {Routes,Route} from "react-router-dom";
import Contactus from "./Components/Home/Contactus";
import Login from "./Components/Shared/Login";
import Dashboard from './Dashboard/Table'
function App() {
  return (
    <div className="App">

     <Navbar></Navbar>
     
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/Presentation" element={<Presentation/>}/>
     <Route path="/Project" element={<Project/>}/>
     <Route path="/Adhesions" element={<Adhesions/>}/>
     <Route path="/Contact" element={<Contactus/>}/>
     <Route path="/Login" element={<Login/>}/>
     <Route path="/Dashboard" element={<Dashboard/>}/>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
