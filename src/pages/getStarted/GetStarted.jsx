import Navbar from "../../components/navbar/Navbar"
import getStartedImage from "../../assets/form.webp"
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom"
import FacebookLogin from 'react-facebook-login';

const GetStarted = () => {

    document.title = "Get Started - Neighborgood"
    const appId = import.meta.env.VITE_FB_APPID

    const responseFacebook = (response) => {
        console.log(response);
        // Handle the response
        // The response object will contain user data and the access token
    }

    return (
        <div className='w-full bg-white dark:bg-slate-950 transition-none md:transition-colors duration-300 ease-linear' >
            <Navbar>
            </Navbar>
            <div className="max-w-screen-2xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 md:px-10" >
                <h1 className="text-3xl  md:text-4xl font-semibold text-primary mb-5" >Welcome to Neighborgood!</h1>
                <div className="flex justify-center w-full ">
                    <div className="max-w-[400px] h-[450px] w-full p-4 rounded-md md:rounded-e-none flex flex-col gap-4 shadow-xl border dark:bg-slate-900 border-primary overflow-hidden justify-center" >
                        <Link to={"/login"} className="bg-primary-light text-black flex gap-2 items-center justify-center rounded h-10 font-medium hover:bg-primary-light/75 dark:hover:bg-primary" > <MdEmail size={18} /> Login with email</Link>
                        <Link to={"/regiter"} className="bg-primary-light text-black flex gap-2 items-center justify-center rounded h-10 font-medium hover:bg-primary-light/75 dark:hover:bg-primary" > <MdEmail size={18} /> SignUp with email</Link>
                        {/* <button onClick={handleLogin} type="button" className="bg-primary-light text-black flex gap-2 items-center justify-center rounded h-10 font-medium hover:bg-primary-light/75 dark:hover:bg-primary" > <MdEmail size={18} /> Login with Facebook</button> */}
                        <FacebookLogin
                            appId={appId} // Replace with your Facebook App ID
                            autoLoad={true}
                            fields="name,email,picture"
                            callback={responseFacebook}
                            icon="fa-facebook" // Optional: customize the button icon
                        />
                    </div>
                    <div className=" border border-s-0 border-primary hidden rounded-e-md max-w-md w-full shadow-xl lg:flex items-center justify-center">
                        <img className=" w-full object-cover " src={getStartedImage} alt="login" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetStarted