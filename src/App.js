import './App.scss';
import Contact from "./components/contact/contact"
import Intro from "./components/intro/intro"
import Topbar from "./components/topbar/topbar"
import Portofolio from "./components/portofolio/portofolio"
import Menu from "./components/menu/menu"
import Works from "./components/works/works"
import Testimonials from "./components/testimonials/testimonials"
import Sidebar from "./components/sidebar/sidebar"
import "./App.scss"
import {useState} from "react";


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <div className="personal">
      <Intro />
      </div>
      <Sidebar />
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
      <Testimonials />
      <Portofolio />
      <Works />
      <Testimonials />
      <Contact />
      </div>
    </div>
    
  );
}

export default App;
