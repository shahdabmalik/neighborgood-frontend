import { Link } from "react-router-dom"
import Navbar from "../../components/navbar/Navbar"
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import useRedirectLoggedOutUsers from "../../customHooks/useRedirectLoggedOutUsers";

const Verify = () => {

  useRedirectLoggedOutUsers()
  const [timeLeft, setTimeLeft] = useState(120);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const token = window.localStorage.getItem('token')

  useEffect(() => {
    // Exit early when we reach 0
    if (!timeLeft) {
      setIsButtonDisabled(false);
      return;
    }
    // Save intervalId to clear the interval when the component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    // Clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // Add timeLeft as a dependency to re-run the effect when we update it
  }, [timeLeft]);


  const handleResend = async () => {
    try {
      const response = await axios.post("/", { token })
      toast.success(response?.data?.message)
      setIsButtonDisabled(true)
      setTimeLeft(120)
    } catch (error) {
      console.log(error);
      const message = error.response.data.message || error.message
      toast.error(message)
    }
  }

  return (
    <div className='w-full bg-white dark:bg-slate-950 transition-none md:transition-colors relative' >
      <Navbar />
      <div className="max-w-screen-xl mx-auto min-h-screen px-4 md:px-10 flex flex-col justify-center items-center pb-16" >
        <h1 className=" text-3xl sm:text-4xl md:text-5xl font-semibold text-primary" >Verify Account</h1>
        <p className=" sm:text-lg md:text-xl mt-1.5 ms:mt-3 font-medium text-slate-800 dark:text-slate-200 text-center" >Please verify your account using the verification link sent to your email address.</p>
        <div className="flex gap-5 mt-5" >
          <button onClick={handleResend} disabled={isButtonDisabled} className="h-10 bg-inherit border-2 text-black dark:text-white flex items-center justify-center w-36 rounded hover:bg-slate-100 dark:hover:bg-slate-900 border-primary " type="button"  >{timeLeft > 0 ? `Resend In: ${timeLeft}` : "Resend Email"}</button>
          <Link className="h-10 bg-inherit border font-medium text-white dark:text-black bg-primary hover:bg-primary-dark flex items-center justify-center w-36 rounded border-primary" to="/login">Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Verify