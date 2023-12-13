import { Controller, useFormContext } from "react-hook-form"
import FormActivity from "./FormActivity"
import SelectInput from "./SelectInput"

const StepNine = () => {

    const { control } = useFormContext()

    return (
        <>
            <FormActivity activity="Other Advice" activityKey={"otherAdvice"} options={["Garden / Landscape", "Computer"]} />
            <SelectInput
                inputName={"tutoring"}
                label={"Tutoring"}
                options={[
                    { value: "Literature", label: "Literature" },
                    { value: "Scirnce", label: "Scirnce" },
                    { value: "History", label: "History" },
                    { value: "Maths", label: "Maths" },
                    { value: "Philosophy", label: "Philosophy" }
                ]}
            />
            <div className="flex flex-col gap-1.5 font-poppins relative rounded shadow-md border-2 p-2 border-white" >
                <label className="font-medium " htmlFor="profile" >Profile Photo:</label>
                <Controller
                    name="profile"
                    control={control}
                    defaultValue={[]}
                    render={({ field: { onChange, name, ref, onBlur } }) => (
                        <input type="file" name={name} id="profile" onBlur={onBlur} ref={ref} onChange={e => onChange(e.target.files)} accept="image/*"
                            className="block w-full cursor-pointer file:cursor-pointer border border-white rounded text-sm focus:z-10 file:bg-gray-50 file:border-0  file:me-4 file:py-1.5 file:px-4 " />
                    )}
                />
            </div>
        </>
    )
}

export default StepNine