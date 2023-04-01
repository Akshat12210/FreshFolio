import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import FindTalent from './pages/FindTalent';
import FindWork from './pages/FindWork';
import NoPage from './pages/NoPage';
import SignIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Join from './pages/Join';
import Clientdash from './pages/Clientdash';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/findtalent" element={<FindTalent />} />
        <Route path="/findwork" element={<FindWork />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Join" element={<Join />} /> 
        <Route path="/Clientdash" element={<Clientdash />} />             
        <Route path="*" element={<NoPage />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App