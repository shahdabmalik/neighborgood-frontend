import FormActivity from "./FormActivity"

const StepFour = () => {
    return (
        <>
            <FormActivity activity="Gardening" activityKey={"gardening"} options={["Flowers / Landscapes", "Fruits / Veggies", "Both"]} />
            <FormActivity activity="Swimming" activityKey={"swimming"} options={["Backyard", "Public Pool", "Health Club Pool"]} />
            <FormActivity activity="Quick Coffee / Tea Breaks" activityKey={"coffeeTea"} options={["My place", "Your Place"]} />
        </>
    )
}

export default StepFour