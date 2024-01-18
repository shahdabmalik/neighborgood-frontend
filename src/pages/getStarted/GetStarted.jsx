import Navbar from "../../components/navbar/Navbar"
import getStartedImage from "../../assets/form.webp"
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom"
import GoogleLoginButton from "../../components/googleLoginButton/GoogleLoginButton";

const GetStarted = () => {

    document.title = "Get Started - Neighborgood"

    return (
        <div className='w-full bg-white dark:bg-slate-950 transition-none md:transition-colors duration-300 ease-linear' >
            <Navbar>
            </Navbar>
            <div className="max-w-screen-2xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 md:px-10" >
                <div className="flex justify-center w-full ">
                    <div className="p-4 max-w-[350px] min-h-[450px] w-full rounded-md md:rounded-e-none shadow-xl border dark:bg-slate-900 border-primary overflow-hidden flex flex-col" >
                        <div>
                            <h1 className="text-3xl md:text-4xl font-semibold text-slate-800 dark:text-slate-200" >Welcome!</h1>
                            <p className="text-slate-700 dark:text-slate-300 font-medium mt-1" >Where Your Interests Lead to Connection</p>
                        </div>
                        <div className="flex-grow" >
                            <div className="flex flex-col gap-5 border-b border-slate-300 dark:border-slate-700 pb-5 mt-8 mb-5" >
                                <Link to={"/login"} className="bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-400 hover:bg-blue-700 text-white dark:text-black flex gap-2 items-center justify-center rounded h-10 font-medium cursor-pointer" > <MdEmail size={18} /> Login </Link>
                                <Link to={"/register"} className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-400 text-white dark:text-black flex gap-2 items-center justify-center rounded h-10 font-medium cursor-pointer" > <MdEmail size={18} />SignUp</Link>
                            </div>
                            <GoogleLoginButton />
                        </div>
                        <Link className="text-blue-500 font-medium text-center" to={"#"} >Forgot Password?</Link>
                    </div>
                    <div className=" border border-s-0 border-primary hidden rounded-e-md max-w-md w-full shadow-xl md:flex items-center justify-center">
                        <img className=" w-full object-cover " src={getStartedImage} alt="login" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetStarted