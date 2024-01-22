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
import GetStarted from "./pages/getStarted/GetStarted"
import PersonalInfo from "./pages/register/PersonalInfo"
import SelectionPage from "./pages/register/SelectionPage"

// axios.defaults.baseURL = "https://neighborgood-kxtn.onrender.com"
axios.defaults.baseURL = "http://127.0.0.1:7000/"
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
        <Route path="/personal-info" element={<PersonalInfo />} />
        <Route path="/select" element={<SelectionPage />} />
        <Route path="/interests" element={<InterestsForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/verification/:token" element={<Verification />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/profile/:id" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
