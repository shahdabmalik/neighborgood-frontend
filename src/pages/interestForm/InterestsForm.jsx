import { useEffect, useState } from "react"
import Navbar from "../../components/navbar/Navbar"
import { FormProvider, useForm } from "react-hook-form"
import FirstStep from "./FirstStep"
import SecondStep from "./SecondStep"
import { Oval } from "react-loader-spinner"
import toast from "react-hot-toast"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { SET_USER } from "../../redux/features/auth/authSlice"
import useRedirectLoggedOutUsers from "../../customHooks/useRedirectLoggedOutUsers"

const InterestsForm = () => {

    useRedirectLoggedOutUsers()
    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const methods = useForm()
    const [currentStep, setCurrentStep] = useState(1)
    const [isLoading, setIsLoading] = useState(false)
    const totalSteps = 2;
    const token = window.localStorage.getItem('token')

    // redirect user to dashoboar if interests already given
    useEffect(() => {
        if (user?.interests_updated) {
            navigate("/dashboard")
        }
    }, [navigate, user])

    const onSubmit = async (data) => {
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1)
        } else {
            try {
                setIsLoading(true)
                const response = await axios.post("/update_interests/", JSON.stringify(data), {
                    headers: { Authorization: `Token ${token}` }
                })
                dispatch(SET_USER(response?.data?.user))
                navigate("/dashboard")
                setIsLoading(false)
            } catch (error) {
                setIsLoading(false)
                console.log(error);
                const message = error.response.data.message || error.message
                toast.error(message)
            }
        }
    }

    useEffect(() => {
        window.scroll(0, 0)
    }, [currentStep])

    return (
        <div className='w-full bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 transition-none md:transition-colors relative' >
            <Navbar />
            <div className="max-w-screen-xl mx-auto min-h-screen px-4 md:px-10 pt-20 md:pt-24 pb-12" >
                <h1 className=" text-2xl xs:text-3xl sm:text-4xl font-semibold text-primary " >{currentStep === 1 ? "Share What You Love?" : "Be a Neighborhood Hero"}</h1>
                <p className=" text-sm xs:text-base mt-1.5 text-color-brown dark:text-color-light" >
                    {currentStep === 1 ? "Your interests are the key to meaningful connections. Select them carefully to find someone who truly complements you." :
                        "Every little help counts! Select the ways you’re ready to pitch in and enrich our neighborhood’s sense of togetherness and cooperation."
                    }
                </p>
                <div className="grid grid-cols-2 gap-4 md:gap-8 mt-8 px-0.5" >
                    <div className="h-1.5 bg-primary rounded-full w-full" ></div>
                    <div className={"h-1.5 rounded-full w-full " + (currentStep === totalSteps ? " bg-primary " : " bg-slate-200 dark:bg-slate-800 ")} ></div>
                </div>
                <div className="" >
                    <FormProvider {...methods} >
                        <form onSubmit={methods.handleSubmit(onSubmit)} >
                            {currentStep === 1 && <FirstStep />}
                            {currentStep === 2 && <SecondStep />}
                            <div className={"mt-8 flex items-center " + (currentStep === 1 ? " justify-end " : " justify-between ")} >
                                {currentStep > 1 && <button onClick={() => setCurrentStep(currentStep - 1)} type="button" className="h-10 w-32 bg-white font-semibold dark:bg-slate-950 border rounded border-primary hover:bg-slate-100 dark:hover:bg-slate-900" >Back</button>}
                                <button type="submit"
                                    className="h-10 w-32 bg-primary font-semibold rounded hover:bg-primary-dark text-white dark:text-black flex items-center justify-center"
                                >{!isLoading ? (currentStep === 1 ? "Next" : "Finish") :
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
                                    />}</button>
                            </div>
                        </form>
                    </FormProvider>
                </div>
            </div>
        </div>
    )
}

export default InterestsForm