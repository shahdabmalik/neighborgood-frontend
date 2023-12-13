import { useFormContext } from "react-hook-form"

const StepOne = () => {

    const { register, watch, formState: { errors } } = useFormContext()

    const password = watch("password");

    return (
        <>
            <div className="flex flex-col gap-1.5 font-poppins relative" >
                <label className="font-medium text-sm " htmlFor="name" >Name:</label>
                <input type="text" name="name" id="name"
                    {...register('name', { required: 'Name is required' })}
                    className="h-9 rounded focus:outline-none p-2 shadow-md" />
                {errors.name && <p className="text-xs text-black font-semibold absolute -bottom-5 right-0.5">{errors.name.message}</p>}
            </div>
            <div className="flex flex-col gap-1.5 font-poppins relative" >
                <label className="font-medium text-sm " htmlFor="email" >Email:</label>
                <input type="email" name="email" id="email"
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: "Invalid email format"
                        }
                    })}
                    className="h-9 rounded focus:outline-none p-2 shadow-md" />
                {errors.email && <p className="text-xs text-black font-semibold absolute -bottom-5 right-0.5">{errors.email.message}</p>}
            </div>
            <div className="flex flex-col gap-1.5 font-poppins relative" >
                <label className="font-medium text-sm " htmlFor="password" >Password:</label>
                <input type="password" name="password" id="password"
                    {...register('password',
                        {
                            required: 'Password is required',
                            minLength: { value: 8, message: "Password must be upto 8 characters" },
                            pattern: {
                                value: /^(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                message: "Include number and special character"
                            }
                        })}
                    className="h-9 rounded focus:outline-none p-2 shadow-md" />
                {errors.password && <p className="text-xs text-black font-semibold absolute -bottom-5 right-0.5">{errors.password.message}</p>}
            </div>
            <div className="flex flex-col gap-1.5 font-poppins relative" >
                <label className="font-medium text-sm " htmlFor="confirmPassword" >Confirm Password:</label>
                <input type="password" name="confirmPassword" id="confirmPassword"
                    {...register('confirmPassword', { required: 'Confirm password is required', validate: value => value === password || "Passwords do not match" })}
                    className="h-9 rounded focus:outline-none p-2 shadow-md" />
                {errors.confirmPassword && <p className="text-xs text-black font-semibold absolute -bottom-5 right-0.5">{errors.confirmPassword.message}</p>}
            </div>
        </>
    )
}

export default StepOne