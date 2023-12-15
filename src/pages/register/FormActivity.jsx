import { useFormContext } from "react-hook-form"
import { useEffect, useState } from "react"

const StepThree = ({ options, activity, activityKey }) => {

    const { register, setValue, watch } = useFormContext()
    const [selectedActivity, setSelectedActivity] = useState(null)

    const selectedActivityWatch = watch(activityKey)

    const handleChange = (value) => {
        if (selectedActivity === value) {
            setSelectedActivity(null)
            setValue(activityKey, null)
        } else {
            setSelectedActivity(value)
            setValue(activityKey, value)
        }
    }
    // fix for when we go a step back and then come forward the checkbox are empty - but the value is still there
    useEffect(() => {
        if (Array.isArray(selectedActivityWatch)) {
            setSelectedActivity(selectedActivityWatch[0])
        }
    }, [selectedActivityWatch])

    return (
        <>
            <div className="flex flex-col gap-3 font-poppins relative rounded shadow-md border-2 p-2 pt-1.5 border-white" >
                <p className="font-medium ">{activity}:</p>
                <div className={"flex gap-x-4 gap-y-2.5 flex-wrap " + (options.length < 3 ? " justify-normal gap-x-8 " : " justify-between ")}>
                    {options.map((value, index) => (
                        <label key={index} className="flex text-sm items-center cursor-pointer">
                            <input
                                type="checkbox"
                                value={value}
                                {...register(activityKey)}
                                onChange={() => handleChange(value)}
                                checked={selectedActivity === value}
                                className="w-[14px] h-[14px] cursor-pointer"
                            />
                            <span className="mt-0.5 pl-1.5" >{value.charAt(0).toUpperCase() + value.slice(1)}</span>
                        </label>
                    ))}
                </div>
            </div>

        </>
    )
}

export default StepThree