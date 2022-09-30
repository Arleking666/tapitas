import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useMemo } from "react";
import { UserContext } from "./context/userContext";
import Index from './pages/index';
import Login from './pages/login';

function App() {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({user, setUser}), [user, setUser]);

  return (
    <BrowserRouter>
      <UserContext.Provider value={value}>
        <Routes>
          <Route path='' element={<Index />}></Route>
          <Route path='login' element={<Login />}></Route>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App
