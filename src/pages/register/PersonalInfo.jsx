import { useNavigate } from "react-router-dom"
import Navbar from "../../components/navbar/Navbar"
import { useEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import toast from "react-hot-toast"
import axios from "axios"
import Select from "react-select"
import { Oval } from "react-loader-spinner"
import "./termCheckBox.css"
import { useSelector } from "react-redux"
import image from "../../assets/personalinfo.svg"
import useRedirectLoggedOutUsers from "../../customHooks/useRedirectLoggedOutUsers"

const PersonalInfo = () => {

    useRedirectLoggedOutUsers()

    const navigate = useNavigate()
    document.title = "Register - Neighborgood"
    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit, control, formState: { errors } } = useForm()
    const { user } = useSelector(state => state.auth)

    useEffect(() => {
        window.scroll(0, 0)
        if (user?.zipCode) {
            navigate("/dashboard")
        }
    }, [user, navigate])


    const onSubmit = async (data) => {

        const formData = new FormData()
        formData.append("zipCode", data.zipCode)
        formData.append("countryCode", data.countryCode?.value)
        formData.append("mobile", data.mobile)
        formData.append("age", data.age)
        // Append the image file if it exists
        if (data?.profile && data?.profile?.length > 0) {
            formData.append('picture', data?.profile[0]);
        }
        // Api Request
        try {
            setIsLoading(true)
            const response = await axios.post("/info/", formData)
            toast.success(response?.data?.message)
            window.localStorage.setItem('token', response?.data?.token)
            setIsLoading(false)
            navigate("/select")
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
            <div className="max-w-screen-2xl mx-auto min-h-screen px-4 md:px-10 pt-20 md:pt-24 pb-12" >
                <h1 className=" text-center text-2xl xs:text-3xl sm:text-4xl font-semibold text-primary " >Let{`'`}s Get to Know You Better</h1>
                <p className=" text-center text-sm xs:text-base mt-1.5 text-color-brown dark:text-color-light" >Fill in the essentials to kickstart your journey towards finding like-minded neighbors. Your privacy is always our top priority.</p>
                <div className="flex items-center justify-center mt-8 lg:mt-10" >
                    <form onSubmit={handleSubmit(onSubmit)} className="border max-w-screen-xs w-full p-4 border-primary border-opacity-50 rounded lg:rounded-e-none shadow-lg">
                        <h3 className="border-b font-semibold text-primary border-primary border-opacity-50 " >Personal Details</h3>
                        <div className="grid gap-y-4 mt-4" >

                            <div className="flex flex-col gap-1.5 font-poppins relative" >
                                <label className="text-sm font-medium text-slate-800 dark:text-slate-300" htmlFor="age" >Age*</label>
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
                                <label className="text-sm font-medium text-slate-800 dark:text-slate-300" htmlFor="zipCode" >Zip Code*</label>
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
                                <label className="text-sm font-medium text-slate-800 dark:text-slate-300" htmlFor="countryCode" >Country Code*</label>
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
                                <label className="text-sm font-medium text-slate-800 dark:text-slate-300" htmlFor="mobile" >Mobile Number*</label>
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
                        <div className="terms-checkbox mt-5">
                            <input className="inp-cbx" id="cbx-46" type="checkbox"
                                {...register('terms', { required: true })}
                            />
                            <label className="cbx" htmlFor="cbx-46"><span>
                                <svg width="12px" height="10px" viewBox="0 0 12 10">
                                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                </svg></span><span className={"text-sm inline-block ml-3 pl-0 text-slate-800 dark:text-slate-200 " + (errors.terms && " border-b border-red-600  text-red-600")} >I agree to <a href="/terms" className="text-blue-500" target="_black" >Terms and Conditions</a></span>
                            </label>
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
                    <div className="hidden lg:flex max-w-xl w-full h-[577px] items-center justify-center border border-primary border-l-0 border-opacity-50 rounded rounded-s-none shadow-lg" >
                        <img src={image} alt="image" className="w-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalInfo