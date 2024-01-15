import Navbar from "../../components/navbar/Navbar"
import { useEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { Oval } from "react-loader-spinner"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import Select from "react-select"
import "./termCheckBox.css"

const Register = () => {

    const navigate = useNavigate()
    document.title = "Register - Neighborgood"
    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit, control, watch, formState: { errors } } = useForm()
    const password = watch('password')

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    const onSubmit = async (data) => {
        // data from form
        const formData = {
            name: data.name,
            email: data.email,
            password: data.password,
            age: data.age,
            zipCode: data.zipCode,
            countryCode: data.countryCode?.value,
            mobile: data.mobile,
            profile: data.profile[0] || null,
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
            <div className="max-w-screen-xl mx-auto min-h-screen px-4 md:px-10 pt-20 md:pt-24 pb-12" >
                <h1 className=" text-2xl xs:text-3xl sm:text-4xl font-semibold text-primary " >Welcome to Neighborgood</h1>
                <p className=" text-sm xs:text-base mt-1.5 text-color-brown dark:text-color-light" >Let&apos;s start with the basics. Your journey to exciting experiences is just a few clicks away!</p>
                <form onSubmit={handleSubmit(onSubmit)} className="border p-4 border-primary border-opacity-50 rounded shadow-lg mt-8">
                    <h3 className="border-b font-semibold text-primary border-primary border-opacity-50 " >Personal Details</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 mt-4" >
                        <div className="flex flex-col gap-1 relative" >
                            <label htmlFor="name" className="text-sm font-medium text-slate-800 dark:text-slate-300" >Name</label>
                            <input type="text" name="name" id="name"
                                className="h-10 p-2 bg-inherit border rounded border-primary border-opacity-50 focus:outline-none text-slate-800 dark:text-slate-200"
                                {...register('name', { required: "Please enter your name" })}
                            />
                            {errors.name && <p className="text-xs text-black font-medium absolute -bottom-5 right-0.5">{errors.name.message}</p>}
                        </div>
                        <div className="flex flex-col gap-1 relative" >
                            <label htmlFor="email" className="text-sm font-medium text-slate-800 dark:text-slate-300" >Email</label>
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
                        <div className="flex flex-col gap-1.5 font-poppins relative" >
                            <label className="text-sm font-medium text-slate-800 dark:text-slate-300" htmlFor="age" >Age</label>
                            <input type="text" name="age" id="age"
                                {...register('age',
                                    {
                                        required: 'Age is required',
                                        min: { value: 8, message: "Age must be 8 years or older" },
                                        max: { value: 100, message: "Age must be below 100" },
                                        pattern: {
                                            value: /^\d+$/,
                                            message: "Only numbers are allowed"
                                        }
                                    })
                                }
                                className="h-10 p-2 bg-inherit border rounded border-primary border-opacity-50 focus:outline-none text-slate-800 dark:text-slate-200" />
                            {errors.age && <p className="text-xs text-black font-medium absolute -bottom-5 right-0.5">{errors.age.message}</p>}
                        </div>
                        <div className="flex flex-col gap-1.5 font-poppins relative" >
                            <label className="text-sm font-medium text-slate-800 dark:text-slate-300" htmlFor="zipCode" >Zip Code</label>
                            <input type="text" name="zipCode" id="zipCode"
                                {...register('zipCode',
                                    {
                                        required: 'Please enter your zip code',
                                        pattern: {
                                            value: /^\d+$/,
                                            message: "Only numbers are allowed"
                                        }
                                    })
                                }
                                className="h-10 p-2 bg-inherit border rounded border-primary border-opacity-50 focus:outline-none text-slate-800 dark:text-slate-200" />
                            {errors.zipCode && <p className="text-xs text-black font-medium absolute -bottom-5 right-0.5">{errors.zipCode.message}</p>}
                        </div>
                        <div className="flex flex-col gap-1.5 font-poppins relative" >
                            <label className="text-sm font-medium text-slate-800 dark:text-slate-300" htmlFor="countryCode" >Country Code</label>
                            <Controller
                                name="countryCode"
                                control={control}
                                rules={{ required: "Please select a country code" }}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        options={[
                                            { value: "+1", label: "+1 (USA)" },
                                            { value: "+44", label: "+44 (UK)" },
                                            { value: "+91", label: "+91 (India)" },
                                        ]}
                                        isClearable
                                        className="h-10 select-input focus:outline-none"
                                        classNamePrefix="my-select"
                                    />
                                )}
                            />
                            {errors.countryCode && <p className="text-xs text-black font-medium absolute -bottom-5 right-0.5">{errors.countryCode.message}</p>}
                        </div>
                        <div className="flex flex-col gap-1.5 font-poppins relative" >
                            <label className="text-sm font-medium text-slate-800 dark:text-slate-300" htmlFor="mobile" >Mobile Number</label>
                            <input type="tel" name="mobile" id="mobile"
                                {...register('mobile',
                                    {
                                        required: 'Please enter your mobile number',
                                        pattern: {
                                            value: /^\d+$/,
                                            message: "Only numbers are allowed"
                                        }
                                    })
                                }
                                className="h-10 p-2 bg-inherit border rounded border-primary border-opacity-50 focus:outline-none text-slate-800 dark:text-slate-200" />
                            {errors.mobile && <p className="text-xs text-black font-medium absolute -bottom-5 right-0.5">{errors.mobile.message}</p>}
                        </div>
                        <div className="flex flex-col gap-1.5 font-poppins relative" >
                            <label className="text-sm font-medium text-slate-800 dark:text-slate-300" htmlFor="profile" >Profile Photo</label>
                            <Controller
                                name="profile"
                                control={control}
                                defaultValue={[]}
                                render={({ field: { onChange, name, ref, onBlur } }) => (
                                    <input type="file" name={name} id="profile" onBlur={onBlur} ref={ref} onChange={e => onChange(e.target.files)} accept="image/*"
                                        className="flex items-center h-10 w-full cursor-pointer file:cursor-pointer border border-primary border-opacity-50 rounded text-sm text-slate-800 dark:text-slate-200 dark:file:text-slate-100 focus:z-10 file:h-10 file:bg-gray-50 dark:file:bg-slate-900 file:border-0  file:me-4 file:py-1.5 file:px-4 " />
                                )}
                            />
                        </div>
                    </div>
                    <h3 className="border-b font-semibold text-primary border-primary border-opacity-50 md:transition-colors mt-6" >Create Password</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 mt-5" >
                        <div className="flex flex-col gap-1.5 font-poppins relative" >
                            <label className="text-sm font-medium text-slate-800 dark:text-slate-300" htmlFor="password" >Password</label>
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
                            <label className="text-sm font-medium text-slate-800 dark:text-slate-300" htmlFor="confirmPassword" >Confirm Password</label>
                            <input type="password" name="confirmPassword" id="confirmPassword"
                                {...register('confirmPassword', { required: 'Please confirm your password', validate: value => value === password || "Passwords do not match" })}
                                className="h-10 p-2 bg-inherit border rounded border-primary border-opacity-50 focus:outline-none text-slate-800 dark:text-slate-200" />
                            {errors.confirmPassword && <p className="text-xs text-black font-medium absolute -bottom-5 right-0.5">{errors.confirmPassword.message}</p>}
                        </div>
                    </div>
                    <div className="terms-checkbox mt-5">
                        <input className="inp-cbx" id="cbx-46" type="checkbox"
                            {...register('terms', { required: true })}
                        />
                        <label className="cbx" htmlFor="cbx-46"><span>
                            <svg width="12px" height="10px" viewBox="0 0 12 10">
                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                            </svg></span><span className={"text-sm inline-block ml-1 text-slate-800 dark:text-slate-200 " + (errors.terms && " border-b border-red-600 ")} >I agree to <a href="/terms" className="text-blue-500" target="_black" >Terms and Conditions</a></span>
                        </label>
                    </div>
                    <button type="submit" disabled={isLoading} className={" h-10 bg-primary mt-6 w-32 text-white px-4 rounded font-medium flex items-center justify-center "} >{!isLoading ? "Submit" :
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
                <p className="text-center mt-5 text-slate-800 dark:text-slate-200 font-medium" >Already have an account? <Link className="font-semibold text-blue-500" to="/login" >Login</Link></p>
            </div>
        </div>
    )
}

export default Register