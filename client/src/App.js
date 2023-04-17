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
import Dashboard from './pages/Dashboard';
import Jobs from './pages/Jobs';
import Apply from './pages/Apply';
import Layout from './shared/Layout';
import Details from './components/Details';
import Profile from './pages/Profile';
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

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
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="apply/:id" element={<Apply />} />
          <Route path="details/:id" element={<Details />} />
          <Route path="profile" element={<Profile />} />
          <Route path="analysis" element={<Clientdash />} />
          <Route path="accounting" element={<Clientdash />} />
          <Route path="projects" element={<Clientdash />} />
          <Route path="messages" element={<Clientdash />} />
        </Route>
        {/* <Route path="/freelancer/dashboard" element={<FreelancerDashboard />} /> */}
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App