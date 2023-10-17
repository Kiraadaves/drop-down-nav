import './App.css'
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { useState } from "react";
import Sidenav from './components/Sidenav';
function App() {
  const [showSidenav, setShowSidenav] = useState(false);

  return (
    <div className="bg-white">
      <Navbar showSidenav={showSidenav} setShowSidenav={setShowSidenav} />
      <Body />
      <Sidenav showSidenav={showSidenav} setShowSidenav={setShowSidenav} />
    </div>
  );
}

export default App
