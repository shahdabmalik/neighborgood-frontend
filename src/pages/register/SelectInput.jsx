import { Controller, useFormContext } from 'react-hook-form'
import Select from 'react-select'

const SelectInput = ({ options, inputName, label }) => {

    const { control, formState: { errors } } = useFormContext()

    return (
        <div className="flex flex-col gap-1.5 font-poppins relative rounded shadow-md border-2 p-2 border-white" >
            <label className="font-medium text-sm " htmlFor={inputName} >{label}:</label>
            <Controller
                name={inputName}
                control={control}
                render={({ field }) => (
                    <Select
                        {...field}
                        options={options}
                        isClearable
                        id={inputName}
                    />
                )}
            />
            {errors.inputName && <p className="text-xs text-black font-semibold absolute -bottom-5 right-0.5">{errors.inputName.message}</p>}
        </div>
    )
}

export default SelectInput