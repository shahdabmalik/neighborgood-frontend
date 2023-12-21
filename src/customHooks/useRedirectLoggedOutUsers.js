import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { SET_LOGIN, SET_USER } from "../redux/features/auth/authSlice"
import { useEffect } from "react"
import axios from "axios"
import toast from "react-hot-toast"


const useRedirectLoggedOutUsers = async () => {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const token = window.localStorage.getItem('token')


    useEffect(() => {
        async function checkUser() {
            try {
                const response = await axios.get("/restricted/", { headers: { Authorization: `Token ${token}` } })
                const data = response.data
                dispatch(SET_USER(data?.user))
                dispatch(SET_LOGIN(true))
            } catch (error) {
                console.log(error);
                // const message = error.response.data.message || error.message
                toast.error("Request unauthorized, Please login")
                navigate("/login")
            }
        }
        checkUser()
    }, [dispatch, navigate])

}

export default useRedirectLoggedOutUsers