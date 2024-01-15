import Question from "./Question"

const SecondStep = () => {
    return (
        <div className="grid gap-8 mt-4" >
            <Question
                question={"Are you open to offering rides to your neighbors?"}
                questionKey={"rides"}
                questionTwo={"What types of rides are you comfortable offering to your neighbors?"}
                options={["Work Commutes", "School Runs", "Medical Appointments", "Emergency Rides"]}
                optionsKey={"ridesType"}
            />
            <Question
                question={"Would you consider offering childcare support to your neighbors?"}
                questionKey={"childcare"}
                questionTwo={"What kind of childcare support are you open to providing for your neighbors?"}
                options={["Babysitting", "After-School Care", "Playdates Hosting", "Emergency Childcare"]}
                optionsKey={"childcareType"}
            />
            <Question
                question={"Are you open to providing elder care assistance to your neighbors?"}
                questionKey={"eldercare"}
                questionTwo={"What kind of eldercare support are you open to providing for your neighbors?"}
                options={["Companionship Visits", "Grocery Shopping Assistance", "Meal Preparation", "Medication Reminders"]}
                optionsKey={"eldercareType"}
            />
            <Question
                question={"Are you a pet lover who’s willing to lend a hand with pet care for your neighbors?"}
                questionKey={"petcare"}
                questionTwo={"What type of pet care are you open to providing for your neighbors?"}
                options={["Dog Walking", "Play and Exercise", "Pet Sitting", "Emergency Pet Care"]}
                optionsKey={"petcareType"}
            />
            <Question
                question={"Are you handy with repairs and interested in offering advice to your neighbors? "}
                questionKey={"repairAdvice"}
                questionTwo={"What kind of repair advice are you comfortable providing?"}
                options={["Electrical Fixes", "Plumbing Tips", "Tech Support", "Home Appliance Repairs"]}
                optionsKey={"repairAdviceType"}
            />
            <Question
                question={"Are you interested in sharing your knowledge through tutoring?"}
                questionKey={"tutoring"}
                questionTwo={"Which subjects are you comfortable in providing tution?"}
                options={["Mathematics", "Science", "Language Arts", "Computer Skills", "Music Lessons"]}
                optionsKey={"tutoringType"}
            />
        </div>
    )
}

export default SecondStep