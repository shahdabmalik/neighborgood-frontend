import FormActivity from "./FormActivity"

const StepEight = () => {
    return (
        <>
            <FormActivity activity="Eldercare" activityKey={"eldercare"} options={["Emergencies", "Occasional", "Regular"]} />
            <FormActivity activity="Petcare" activityKey={"petcare"} options={["Emergencies", "Occasional", "Regular"]} />
            <FormActivity activity="Repair Advice" activityKey={"repairAdvice"} options={["Home", "Vehicle"]} />
        </>
    )
}

export default StepEight