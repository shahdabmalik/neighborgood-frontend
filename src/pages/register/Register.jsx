import Navbar from "../../components/navbar/Navbar"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { Oval } from "react-loader-spinner"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import Lottie from "lottie-react"
import animation from "../../assets/register.json"

const Register = () => {

    const navigate = useNavigate()
    document.title = "Register - Neighborgood"
    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const password = watch('password')

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    const onSubmit = async (data) => {

        const formData = {
            name: data.name,
            email: data.email,
            password: data.password
        }

        // Api Request
        try {
            setIsLoading(true)
            const response = await axios.post("/index/", JSON.stringify(formData))
            toast.success(response?.data?.message)
            window.localStorage.setItem('token', response?.data?.token)
            setIsLoading(false)
            navigate("/verify")
        } catch (error) {
            console.log(error);
            const message = error.response.data.message || error.message
            toast.error(message)
            setIsLoading(false)
        }
    }

    return (
        <div className='w-full bg-white dark:bg-slate-950 transition-none md:transition-colors relative' >
            <Navbar />
            <div className="max-w-screen-2xl mx-auto min-h-screen px-4 md:px-10 pt-32 md:pt-24 pb-12" >
                <h1 className=" text-center text-2xl xs:text-3xl sm:text-4xl font-semibold text-primary " >Welcome to Neighborgood</h1>
                <p className=" text-center text-sm xs:text-base mt-1.5 text-color-brown dark:text-color-light" >Let&apos;s start with the basics. Your journey to exciting experiences is just a few clicks away!</p>
                <div className="flex items-center justify-center mt-8 lg:mt-10" >
                    <form onSubmit={handleSubmit(onSubmit)} className="border max-w-[420px] w-full p-4 border-primary border-opacity-50 rounded lg:rounded-e-none shadow-lg">
                        <h3 className="border-b font-semibold text-primary border-primary border-opacity-50 " >Basic Details</h3>
                        <div className="grid gap-y-4 mt-4" >
                            <div className="flex flex-col gap-1 relative" >
                                <label htmlFor="name" className="text-sm font-medium text-slate-800 dark:text-slate-300" >Name*</label>
                                <input type="text" name="name" id="name"
                                    className="h-10 p-2 bg-inherit border rounded border-primary border-opacity-50 focus:outline-none text-slate-800 dark:text-slate-200"
                                    {...register('name', { required: "Please enter your name" })}
                                />
                                {errors.name && <p className="text-xs text-black font-medium absolute -bottom-5 right-0.5">{errors.name.message}</p>}
                            </div>
                            <div className="flex flex-col gap-1 relative" >
                                <label htmlFor="email" className="text-sm font-medium text-slate-800 dark:text-slate-300" >Email*</label>
                                <input type="email" name="email" id="email"
                                    className="h-10 p-2 bg-inherit border rounded border-primary border-opacity-50 focus:outline-none text-slate-800 dark:text-slate-200"
                                    {...register('email', {
                                        required: "Please enter your email",
                                        pattern: {
                                            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                            message: "Invalid email format"
                                        }
                                    })}
                                />
                                {errors.email && <p className="text-xs text-black font-medium absolute -bottom-5 right-0.5">{errors.email.message}</p>}
                            </div>
                        </div>
                        <div className="grid gap-y-4 mt-5" >
                            <div className="flex flex-col gap-1.5 font-poppins relative" >
                                <label className="text-sm font-medium text-slate-800 dark:text-slate-300" htmlFor="password" >Password*</label>
                                <input type="password" name="password" id="password"
                                    {...register('password',
                                        {
                                            required: 'Please provide a password',
                                            minLength: { value: 8, message: "Password must be upto 8 characters" },
                                            pattern: {
                                                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
                                                message: "Should contain letters and numbers"
                                            }
                                        })}
                                    className="h-10 p-2 bg-inherit border rounded border-primary border-opacity-50 focus:outline-none text-slate-800 dark:text-slate-200" />
                                {errors.password && <p className="text-xs text-black font-medium absolute -bottom-5 right-0.5">{errors.password.message}</p>}
                            </div>
                            <div className="flex flex-col gap-1.5 font-poppins relative" >
                                <label className="text-sm font-medium text-slate-800 dark:text-slate-300" htmlFor="confirmPassword" >Confirm Password*</label>
                                <input type="password" name="confirmPassword" id="confirmPassword"
                                    {...register('confirmPassword', { required: 'Please confirm your password', validate: value => value === password || "Passwords do not match" })}
                                    className="h-10 p-2 bg-inherit border rounded border-primary border-opacity-50 focus:outline-none text-slate-800 dark:text-slate-200" />
                                {errors.confirmPassword && <p className="text-xs text-black font-medium absolute -bottom-5 right-0.5">{errors.confirmPassword.message}</p>}
                            </div>
                        </div>
                        <button type="submit" disabled={isLoading} className={" h-10 w-full bg-primary hover:bg-primary-dark mt-6 text-white px-4 rounded font-medium flex items-center justify-center "} >{!isLoading ? "Submit" :
                            <Oval
                                height={24}
                                width={24}
                                color="#ffffff"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                                ariaLabel='oval-loading'
                                secondaryColor="#ffffff"
                                strokeWidth={4}
                                strokeWidthSecondary={3}
                            />}
                        </button>
                    </form>
                    <div className="hidden lg:block max-w-screen-xs w-full border border-primary border-l-0 border-opacity-50 rounded rounded-s-none shadow-lg" >
                        <Lottie animationData={animation} loop />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register