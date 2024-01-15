import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode"
import axios from "axios";
import { SET_LOGIN, SET_USER } from "../../redux/features/auth/authSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const GoogleLoginButton = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

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
            const { data } = await axios.post("/", userData)
            dispatch(SET_USER(data?.user))
            dispatch(SET_LOGIN(true))
            window.localStorage.setItem('token', data?.token)
            if (!data?.user?.interests_updated) {
                return navigate("/interests")
            }
            navigate("/dashboard")
        } catch (error) {
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
            { shape: 'rounded', size: 'fill', width: "316", text:"Continue with Google" }
        );
    }

    return (
        <div className="w-full" id="signIn" ></div>
    )
}

export default GoogleLoginButton