import { useFormContext } from "react-hook-form"
import FormActivity from "./FormActivity"

const StepThree = () => {

    const { register } = useFormContext()

    return (
        <>
            <FormActivity activity="Walking" activityKey={"walking"} options={["Slow", "Moderate", "Fast"]} />
            <FormActivity activity="Running" activityKey={"running"} options={["Slow", "Moderate", "Fast"]} />
            <FormActivity activity="Stulfaft Park" activityKey={"stulfaftPark"} options={["Slow", "Moderate", "Fast"]} />
            <label htmlFor="dogWalking" className="flex justify-between items-center mt-2 cursor-pointer border border-white p-2 rounded" >
                <p className="text-sm font-semibold" >Dog Walking</p>
                <div className="switch" >
                    <input type="checkbox" name="dogWalking" id="dogWalking" {...register("dogWalking")} />
                    <span className="slider" ></span>
                </div>
            </label>
        </>
    )
}

export default StepThree