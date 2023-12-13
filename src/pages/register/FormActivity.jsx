import { useFormContext } from "react-hook-form"
import { useState } from "react"

const StepThree = ({ options, activity, activityKey }) => {

    const { register, setValue } = useFormContext()
    const [selectedActivity, setSelectedActivity] = useState(null)

    const handleChange = (value) => {
        if (selectedActivity === value) {
            setSelectedActivity(null)
            setValue(activityKey, null)
        } else {
            setSelectedActivity(value)
            setValue(activityKey, value)
        }
    }

    return (
        <>
            <div className="flex flex-col gap-3 font-poppins relative rounded shadow-md border-2 p-2 pt-1.5 border-white" >
                <p className="font-medium ">{activity}:</p>
                <div className={"flex gap-x-4 gap-y-2.5 flex-wrap " + (options.length < 5 ? " justify-normal gap-x-8 " : " justify-between ")}>
                    {options.map((speed, index) => (
                        <label key={index} className="flex text-sm items-center cursor-pointer">
                            <input
                                type="checkbox"
                                value={speed}
                                {...register(activityKey)}
                                onChange={() => handleChange(speed)}
                                checked={selectedActivity === speed}
                                className="w-[14px] h-[14px] cursor-pointer"
                            />
                            <span className="mt-0.5 pl-1.5" >{speed.charAt(0).toUpperCase() + speed.slice(1)}</span>
                        </label>
                    ))}
                </div>
            </div>

        </>
    )
}

export default StepThree