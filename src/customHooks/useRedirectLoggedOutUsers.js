import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { SET_AUTH_LOADING, SET_LOGIN, SET_USER } from "../redux/features/auth/authSlice"
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
                dispatch(SET_AUTH_LOADING(true))
                const response = await axios.get("/restricted/", { headers: { Authorization: `Token ${token}` } })
                const data = response.data
                dispatch(SET_USER(data?.user))
                dispatch(SET_LOGIN(true))
                dispatch(SET_AUTH_LOADING(false))
                if (!data?.user?.email_confirmed) {
                    navigate("/verify")
                    return
                }
                if (!data?.user?.interests_updated) {
                    navigate("/interests")
                    return
                }
            } catch (error) {
                dispatch(SET_AUTH_LOADING(false))
                console.log(error);
                // const message = error.response.data.message || error.message
                toast.error("Request unauthorized, Please login")
                navigate("/get-started")
            }
        }
        checkUser()
    }, [dispatch, navigate, token])

}

export default useRedirectLoggedOutUsers