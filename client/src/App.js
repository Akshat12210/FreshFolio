import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import FindTalent from './pages/FindTalent';
import FindWork from './pages/FindWork';
import NoPage from './pages/NoPage';
import SignIn from './pages/LogIn';
import Join from './pages/Join';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/findtalent" element={<FindTalent />} />
        <Route path="/findwork" element={<FindWork />} />
        <Route path="*" element={<NoPage />} /> 
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Join" element={<Join />} />             
      </Routes>
    </BrowserRouter>
  )
}

export default App