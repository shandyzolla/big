import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { useState } from 'react';
import Navbar from "./components/Navbar";
 
function App() {
  const [isAuth,setIsAuth] = useState(false);
  return (
    <BrowserRouter>

      {isAuth ? <> 
      <Navbar setIsAuth={setIsAuth} />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
      </Routes>

      </> 
      :
      <>
      <Routes>
        <Route exact path="/" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>

      </>
      }
    </BrowserRouter>
  );
}
 
export default App;