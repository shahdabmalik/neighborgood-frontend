import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Dashboard from "./pages/dashboard/Dashboard"
import Profile from "./pages/profile/Profile"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import { Toaster } from "react-hot-toast"
import axios from "axios"
import UserProfile from "./pages/profile/UserProfile"
import TermsAndConditions from "./pages/register/TermsAndConditions"
import InterestsForm from "./pages/interestForm/InterestsForm"
import Verify from "./pages/register/Verify"
import Verification from "./pages/register/Verification"

axios.defaults.baseURL = "https://neighborgood-s0cq.onrender.com"
axios.defaults.withCredentials = true

function App() {

  return (
    <BrowserRouter>
      <Toaster
        toastOptions={{
          className: "toast",
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/interests" element={<InterestsForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/verification/:token" element={<Verification />} />
        <Route path="/profile/:id" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
