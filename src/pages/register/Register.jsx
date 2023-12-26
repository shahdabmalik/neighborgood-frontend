import Navbar from "../../components/navbar/Navbar"
import formImage from "../../assets/form.webp"
// import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import StepOne from "./StepOne"
import StepTwo from "./StepTwo"
import StepThree from "./StepThree"
import StepFour from "./StepFour"
import StepFive from "./StepFive"
import StepSix from "./StepSix"
import StepSeven from "./StepSeven"
import StepEight from "./StepEight"
import StepNine from "./StepNine"
import toast from "react-hot-toast"
import { Oval } from "react-loader-spinner"
import { Link, useNavigate } from "react-router-dom"
// import { registerUser } from "../../redux/features/auth/authServices"
import { useDispatch } from "react-redux"
import { SET_LOGIN, SET_USER } from "../../redux/features/auth/authSlice"
import axios from "axios"

const Register = () => {

    document.title = "Register - Neighborgood"

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [location, setLocation] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [currentStep, setCurrentStep] = useState(1)
    const methods = useForm()
    const totalSteps = 9;

    // get loction call
    useEffect(() => {
        getLocation()
    }, [])
    // get location function
    function getLocation() {
        if (!navigator.geolocation) {
            toast.error("Get Location is not supported by the browser")
        }
        navigator.geolocation.getCurrentPosition((position) => {
            setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            });
        }, () => {
            toast.error("Please provide location access. It is mandatory for finding matches", {
                duration: 8000
            })
        }
        );
    }

    const onSubmit = async (data) => {
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1)
        } else {
            // data from form
            const formData = {
                name: data.name,
                email: data.email,
                password: data.password,
                age: data.age,
                zipCode: data.zipCode,
                countryCode: data.countryCode?.value || null,
                mobile: data.mobile,
                shareDetails: data.shareDetails,
                walking: data.walking.length > 0 ? data.walking[0] : null,
                running: data.running.length > 0 ? data.running[0] : null,
                stulfaftPark: data.stulfaftPark.length > 0 ? data.stulfaftPark[0] : null,
                dogWalking: data.dogWalking,
                gardening: data.gardening.length > 0 ? data.gardening[0] : null,
                swimming: data.swimming.length > 0 ? data.swimming[0] : null,
                coffeeTea: data.coffeeTea.length > 0 ? data.coffeeTea[0] : null,
                art: data.art.length > 0 ? data.art[0] : null,
                foodGatherings: data.foodGatherings.length > 0 ? data.foodGatherings[0] : null,
                televisionSports: data.televisionSports.length > 0 ? data.televisionSports[0] : null,
                movies: data.movies?.value || null,
                shopping: data.shopping?.value || null,
                happyHours: data.happyHours.length > 0 ? data.happyHours[0] : null,
                errands: data.errands.length > 0 ? data.errands[0] : null,
                rides: data.rides.length > 0 ? data.rides[0] : null,
                childcare: data.childcare.length > 0 ? data.childcare[0] : null,
                eldercare: data.eldercare.length > 0 ? data.eldercare[0] : null,
                petcare: data.petcare.length > 0 ? data.petcare[0] : null,
                repairAdvice: data.repairAdvice.length > 0 ? data.repairAdvice[0] : null,
                otherAdvice: data.otherAdvice.length > 0 ? data.otherAdvice[0] : null,
                tutoring: data.tutoring?.value || null,
                profile: data.profile[0] || null,
                latitude: location?.latitude || null,
                longitude: location?.longitude || null
            }
            const { walking, running, stulfaftPark, dogWalking, gardening, swimming, coffeeTea, art, foodGatherings, televisionSports, movies, shopping, happyHours, errands, rides, childcare, eldercare, petcare, repairAdvice, otherAdvice, tutoring } = formData

            // Validation - atleast one filled
            if (!walking && !running && !stulfaftPark && !dogWalking && !gardening && !swimming && !coffeeTea && !art && !foodGatherings && !televisionSports && !movies && !shopping && !happyHours && !errands && !rides && !childcare && !eldercare && !petcare && !repairAdvice && !otherAdvice && !tutoring) {
                return toast.error("Please fill out atleast one interest field")
            }
            if (!location) {
                getLocation()
                return
            }
            // Api Request
            try {
                setIsLoading(true)
                const response = await axios.post("/index/", JSON.stringify(formData))
                // const response = await registerUser(formData)
                dispatch(SET_USER(response?.data?.user))
                dispatch(SET_LOGIN(true))
                window.localStorage.setItem("token", response?.data?.token)
                toast.success('Registered')
                setIsLoading(false)
                navigate("/dashboard")
            } catch (error) {
                console.log(error);
                const message = error.response.data.message || error.message
                toast.error(message)
                setIsLoading(false)
            }
        }
    }

    return (
        <div className='w-full bg-white dark:bg-slate-950 transition-none md:transition-colors  duration-300 ease-linear' >
            <Navbar />
            <div className="max-w-screen-2xl mx-auto min-h-screen flex items-center justify-center px-4 md:px-10" >
                <div className="flex justify-center w-full lg:pt-8 relative">
                    <div className="max-w-[420px] min-h-[520px] w-full p-4 flex flex-col gap-4 shadow-xl bg-primary-light border border-primary-light rounded-md lg:rounded-e-none overflow-hidden" >
                        <h1 className="text-center text-3xl font-semibold " >
                            {currentStep <= 2 && "Personal Details"}
                            {currentStep >= 3 && currentStep < 7 && "Interested Activities"}
                            {currentStep > 6 && "Free Favours"}
                        </h1>
                        <FormProvider {...methods}>
                            <form onSubmit={methods.handleSubmit(onSubmit)} className="flex-grow flex flex-col gap-4 justify-center">
                                <div className="flex-grow flex flex-col justify-center gap-6" >
                                    {currentStep === 1 && <StepOne />}
                                    {currentStep === 2 && <StepTwo />}
                                    {currentStep === 3 && <StepThree />}
                                    {currentStep === 4 && <StepFour />}
                                    {currentStep === 5 && <StepFive />}
                                    {currentStep === 6 && <StepSix />}
                                    {currentStep === 7 && <StepSeven />}
                                    {currentStep === 8 && <StepEight />}
                                    {currentStep === 9 && <StepNine />}
                                </div>
                                <div className="flex justify-between items-center" >
                                    {currentStep > 1 ?
                                        <button type="button" onClick={() => { setCurrentStep(currentStep - 1) }}
                                            className="px-4 py-1.5 bg-white hover:bg-slate-100 rounded font-semibold text-sm h-9" >Back
                                        </button>
                                        : <span></span>
                                    }
                                    <button type="submit" disabled={isLoading} className={"justify-self-end h-9 px-4 py-1.5 bg-white hover:bg-slate-100 rounded font-semibold text-sm flex items-center justify-center " + (isLoading && " w-[83.3px] ")} >{!isLoading ? (currentStep === 9 ? "Submit" : "Next") :
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
                                        />}
                                    </button>
                                </div>
                            </form>
                        </FormProvider>
                    </div>
                    <div className=" hidden max-w-md w-full shadow-xl border border-primary-light rounded-e-md lg:flex items-center justify-center">
                        <img className=" w-full object-cover " src={formImage} alt="image" />
                    </div>
                    <p className="text-center absolute -bottom-10 text-slate-800 dark:text-slate-200 font-medium" >Already have an account? <Link className="font-semibold text-blue-600" to="/login" >Login</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Register