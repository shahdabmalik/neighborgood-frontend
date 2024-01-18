import Navbar from "../../components/navbar/Navbar"
import Lottie from "lottie-react"
import animation from "../../assets/verification.json"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import toast from "react-hot-toast"
import axios from "axios"
import { SET_LOGIN, SET_USER } from "../../redux/features/auth/authSlice"

const Verification = () => {

  const navigate = useNavigate()
  const { token } = useParams()

  useEffect(() => {
    async function verifyUser() {
      try {
        const response = await axios.post(`/confirm_email/${token}`)
        if (response?.data?.user) {
          SET_USER(response?.data?.user)
          SET_LOGIN(true)
          window.localStorage.setItem('token', response?.data?.token)
          toast.success(response?.data?.message)
          navigate("/interests")
          return
        }
        return toast.error("Error verifying email")
      } catch (error) {
        console.log(error);
        const message = error.response.data.message || error.message
        toast.error(message)
      }
    }
    verifyUser()
  }, [token, navigate])

  return (
    <div className='w-full bg-white dark:bg-slate-950 transition-none md:transition-colors relative' >
      <Navbar />
      <div className="max-w-screen-xl mx-auto min-h-screen px-4 md:px-10 flex items-center justify-center pb-16" >
        <div>
          <Lottie animationData={animation} loop={true} />
          <h1 className="text-center mt-8 text-3xl font-semibold text-primary" >Verifying...</h1>
        </div>
      </div>
    </div>
  )
}

export default Verification