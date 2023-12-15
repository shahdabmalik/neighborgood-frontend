import { Controller, useFormContext } from "react-hook-form"
import Select from "react-select"
import "./switch.css"

const StepTwo = () => {

    const { control, register, formState: { errors } } = useFormContext()

    return (
        <>
            <div className="flex flex-col gap-1.5 font-poppins relative" >
                <label className="font-medium text-sm " htmlFor="age" >Age:</label>
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
                    className="h-10 rounded focus:outline-none p-2 shadow-md" />
                {errors.age && <p className="text-xs text-black font-semibold absolute -bottom-5 right-0.5">{errors.age.message}</p>}
            </div>
            <div className="flex flex-col gap-1.5 font-poppins relative" >
                <label className="font-medium text-sm " htmlFor="zipCode" >Zip Code:</label>
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
                    className="h-10 rounded focus:outline-none p-2 shadow-md" />
                {errors.zipCode && <p className="text-xs text-black font-semibold absolute -bottom-5 right-0.5">{errors.zipCode.message}</p>}
            </div>
            <div className="flex flex-col gap-1.5 font-poppins relative" >
                <label className="font-medium text-sm " htmlFor="countryCode" >Country Code:</label>
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
                            className="h-10"
                        />
                    )}
                />
                {errors.countryCode && <p className="text-xs text-black font-semibold absolute -bottom-5 right-0.5">{errors.countryCode.message}</p>}
            </div>
            <div className="flex flex-col gap-1.5 font-poppins relative" >
                <label className="font-medium text-sm " htmlFor="mobile" >Mobile Number:</label>
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
                    className="h-10 rounded focus:outline-none p-2 shadow-md" />
                {errors.mobile && <p className="text-xs text-black font-semibold absolute -bottom-5 right-0.5">{errors.mobile.message}</p>}
            </div>
            <label htmlFor="shareDetails" className="flex justify-between items-center mt-2 cursor-pointer" >
                <p className="text-sm font-semibold" >Share my details with similar users?</p>
                <div className="switch" >
                    <input type="checkbox" name="shareDetails" id="shareDetails" {...register("shareDetails")} />
                    <span className="slider" ></span>
                </div>
            </label>
        </>
    )
}

export default StepTwo