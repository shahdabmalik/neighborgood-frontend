import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode"
import axios from "axios";
import { SET_LOGIN, SET_USER } from "../../redux/features/auth/authSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import animation from "../../assets/google.json"

const GoogleLoginButton = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.onload = () => initializeGoogle();
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // handle login function
    async function handleCallback(response) {
        try {
            const userObj = jwtDecode(response.credential)
            const userData = {
                name: userObj.name,
                email: userObj.email,
                picture: userObj.picture
            }
            setIsLoading(true)
            const { data } = await axios.post("/google_login/", userData)
            dispatch(SET_USER(data?.user))
            dispatch(SET_LOGIN(true))
            window.localStorage.setItem('token', data?.token)
            if (!data?.user?.zipCode) {
                return navigate("/personal-info")
            }
            if (!data?.user?.interests_updated) {
                return navigate("/select")
            }
            navigate("/dashboard")
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            console.log(error);
            toast.error("Error occurred while login.")
        }
    }

    function initializeGoogle() {
        // eslint-disable-next-line no-undef
        google.accounts.id.initialize({
            client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
            callback: handleCallback
        })
        // eslint-disable-next-line no-undef
        google.accounts.id.renderButton(
            document.getElementById('signIn'),
            { shape: 'rounded', size: 'fill', width: "316", text: "Continue with Google" }
        );
    }

    return (
        <>
            <div className="w-full" id="signIn" ></div>
            {isLoading && <div className="fixed top-0 left-0 h-screen w-full bg-black/50 z-[999] backdrop-blur-sm flex justify-center items-center" >
                <div className="relative bg-white dark:bg-slate-800 aspect-square max-w-xs sm:max-w-sm w-full rounded-full flex items-center justify-center" >
                    <Lottie animationData={animation} className="w-3/5" />
                    <p className="absolute bottom-12 w-full text-center text-xl font-medium text-blue-500 animate-pulse " >Logging In</p>
                </div>
            </div>
            }
        </>
    )
}

export default GoogleLoginButton