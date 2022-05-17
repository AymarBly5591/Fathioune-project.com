

import "./App.css";
import Landing from "./pages/Landing";
import {BrowserRouter ,  Routes ,  Route} from 'react-router-dom';
import Catergories from "./pages/Catergories";
import Panier from "./pages/Panier";
import SignIn from "./pages/SignIn";
import SingUp from  "./pages/SingUp";
import Details from "./pages/Details";
import  Search from "./pages/Search";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Help from "./pages/Help";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
       <Routes>
         <Route path="*" element= {<NotFound/>} />
         <Route path="/" element={<Landing/>}/>
         <Route path="/cart" element={<Catergories/>} />
         <Route path="/panier" element={<Panier/>} />
         <Route path="/signin" element={<SignIn/>} />
         <Route path="/signup" element={<SingUp/>} />
         <Route path="/details" element={<Details/>} />
         <Route path="/search" element={<Search/>} />
         <Route path="/profile" element={<Profile/>} />
         <Route path="/help" element={<Help />} />
       </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
