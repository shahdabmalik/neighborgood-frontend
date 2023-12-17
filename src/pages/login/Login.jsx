import Navbar from "../../components/navbar/Navbar"
import NavbarLink from "../../components/navbar/NavbarLink"
import loginImage from "../../assets/login.svg"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { Oval } from "react-loader-spinner"
import { loginUser } from "../../redux/features/auth/authServices"
import { useDispatch } from "react-redux"
import { SET_LOGIN, SET_USER } from "../../redux/features/auth/authSlice"

const Login = () => {

    document.title = "Login - Neighborgood"

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm()

    // login function
    const onSubmit = async (data) => {
        try {
            setIsLoading(true)
            const response = await loginUser(data)
            dispatch(SET_USER(response?.user))
            dispatch(SET_LOGIN(true))
            window.localStorage.setItem('token', response?.token)
            console.log(response);
            setIsLoading(false)
            navigate("/dashboard")
        } catch (error) {
            console.log(error);
            setIsLoading(false)
        }
    }

    return (
        <div className='w-full bg-white dark:bg-slate-950 transition-none md:transition-colors duration-300 ease-linear' >
            <Navbar>
                <NavbarLink pageLink={true} path={"/"} name={"Home"} />
                <NavbarLink pageLink={true} path={"/register"} name={"Register"} />
            </Navbar>
            <div className="max-w-screen-2xl mx-auto min-h-screen flex items-center justify-center px-4 md:px-10" >
                <div className="flex justify-center w-full ">
                    <div className="max-w-[400px] h-[450px] w-full p-4 flex flex-col gap-4 shadow-xl bg-primary-light border border-primary-light rounded-md lg:rounded-e-none overflow-hidden" >
                        <h1 className="text-center text-4xl font-semibold " >Login</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="flex-grow flex flex-col gap-4 justify-center">
                            <div className="flex flex-col gap-1.5 font-poppins relative" >
                                <label className="font-medium text-sm " htmlFor="email" >Email:</label>
                                <input type="email" name="email" id="email"
                                    {...register('email', {
                                        required: 'Please enter you email address',
                                        pattern: {
                                            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                            message: "Invalid email format"
                                        }
                                    })}
                                    className="h-10 rounded focus:outline-none p-2 shadow-md" />
                                {errors.email && <p className="text-xs text-black font-semibold absolute -bottom-5 right-0.5">{errors.email.message}</p>}
                            </div>
                            <div className="flex flex-col gap-1.5 font-poppins relative" >
                                <label className="font-medium text-sm " htmlFor="password" >Password:</label>
                                <input type="password" name="password" id="password"
                                    {...register('password', { required: 'Please enter your password', })}
                                    className="h-10 rounded focus:outline-none p-2 shadow-md" />
                                {errors.password && <p className="text-xs text-black font-semibold absolute -bottom-5 right-0.5">{errors.password.message}</p>}
                            </div>
                            <button type="submit" disabled={isLoading} className="h-10 bg-white hover:bg-slate-100 mt-6 rounded font-semibold flex items-center justify-center" >{!isLoading ? "Login" :
                                <Oval
                                    height={24}
                                    width={24}
                                    color="#ff7800"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                    visible={true}
                                    ariaLabel='oval-loading'
                                    secondaryColor="#ff7800"
                                    strokeWidth={4}
                                    strokeWidthSecondary={3}
                                />
                            }</button>
                        </form>
                        <p className="text-center" >Don&#39;t have an account? <Link className="font-semibold" to="/register">Register</Link> </p>
                    </div>
                    <div className=" hidden max-w-md w-full shadow-xl border border-primary-light rounded-e-md lg:flex items-center justify-center">
                        <img className=" w-full object-cover " src={loginImage} alt="login" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login