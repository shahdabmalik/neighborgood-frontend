import FormActivity from "./FormActivity"
import SelectInput from "./SelectInput"

const StepSix = () => {
    return (
        <>
            <SelectInput
                inputName={"movies"}
                label={"Movies"}
                options={[
                    { value: "Action", label: "Action" },
                    { value: "Rom-Com", label: "Rom-Com" },
                    { value: "Science Fiction", label: "Science Fiction" },
                    { value: "Indie", label: "Indie" },
                    { value: "Fantasy", label: "Fantasy" },
                    { value: "Any", label: "Any" },
                ]}
            />
            <SelectInput
                inputName={"shopping"}
                label={"Shopping"}
                options={[
                    { value: "Groceries", label: "Groceries" },
                    { value: "Books", label: "Books" },
                    { value: "Fashion", label: "Fashion" },
                    { value: "Beauty", label: "Beauty" },
                    { value: "Any", label: "Any" },
                ]}
            />
            <FormActivity activity="Happy Hours" activityKey={"happyHours"} options={["Quaterly", "Monthly", "Weekly"]} />
        </>
    )
}

export default StepSix