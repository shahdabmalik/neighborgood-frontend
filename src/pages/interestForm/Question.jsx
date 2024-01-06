import { useEffect } from "react"
import "./switch.css"
import { useFormContext } from "react-hook-form"

const Question = ({ question, questionTwo, questionKey, options, optionsKey }) => {

    const { register, watch, setValue } = useFormContext()

    const key = watch(questionKey)

    useEffect(() => {
        if (!key && optionsKey) {
            setValue(optionsKey, null)
        }
    }, [optionsKey, setValue, key])

    return (
        <div className="border border-primary border-opacity-50 p-4 rounded-md shadow-md" >
            <div className={"flex gap-4 md:items-center justify-between "}>
                <p className=" md:text-lg font-medium text-slate-800 dark:text-slate-200 " >{question}</p>
                <div className="switch-check">
                    <label className="switch">
                        <input type="checkbox"
                            {...register(questionKey)}
                        />
                        <span className="slider"></span>
                    </label>
                </div>
            </div>
            {key && questionTwo && <div className="mt-3 md:mt-4" >
                <p className="text-sm sm:text-base" >{questionTwo}</p>
                <div className="flex gap-x-4 gap-y-3 mt-3 flex-wrap" >
                    {options && options?.map((value, index) => (
                        <div key={index} className="option-checkbox">
                            <input type="checkbox" name={value} id={`${optionsKey}-${value}`}
                                value={value}
                                {...register(optionsKey)}
                            />
                            <label className="text-sm" htmlFor={`${optionsKey}-${value}`}>{value}</label>
                        </div>
                    ))}
                </div>
            </div>}
        </div>
    )

}

export default Question