import FormActivity from "./FormActivity"

const StepSeven = () => {
    return (
        <>
            <FormActivity activity="Errands" activityKey={"errands"} options={["Emergencies", "Occasional", "Regular"]} />
            <FormActivity activity="Rides" activityKey={"rides"} options={["Emergencies", "Occasional", "Regular"]} />
            <FormActivity activity="Childcare" activityKey={"childcare"} options={["Emergencies", "Occasional", "Regular"]} />
        </>
    )
}

export default StepSeven