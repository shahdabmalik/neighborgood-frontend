import FormActivity from "./FormActivity"

const StepFive = () => {
    return (
        <>
            <FormActivity activity="Art" activityKey={"art"} options={["Sketching", "Drawing", "Painting", "Any"]} />
            <FormActivity activity="Food Gatherings" activityKey={"foodGatherings"} options={["Informal Dinner Parties", "BBQs"]} />
            <FormActivity activity="Television Sports" activityKey={"televisionSports"} options={["Football", "Basket Ball", "Other"]} />
        </>
    )
}

export default StepFive