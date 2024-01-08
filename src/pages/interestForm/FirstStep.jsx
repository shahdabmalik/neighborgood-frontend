import Question from "./Question"
// import { LiaWalkingSolid, LiaRunningSolid, LiaDogSolid, LiaSwimmerSolid, LiaCoffeeSolid } from "react-icons/lia";
// import { GiPlantRoots } from "react-icons/gi";
const FirstStep = () => {
    return (
        <div className="grid gap-8 mt-4" >
            <Question
                question={"Do you find joy in taking leisurely walks? "}
                questionTwo={"Great to hear! What's your walking tempo?"}
                questionKey={"walking"}
                options={["Slow", "Moderate", "Fast"]}
                optionsKey={"walkingSpeed"}
            />
            <Question
                question={"Is running your thing?"}
                questionTwo={"Awesome! What type of runner are you?"}
                questionKey={"running"}
                options={["Sprints", "Marathons", "Casual Jogs"]}
                optionsKey={"runningType"}
            />
            <Question
                question={"Do you have a furry friend at home?"}
                questionTwo={"That's great! Are you interested in joining your neighbors for dog walks?"}
                questionKey={"dog"}
                options={["Regular", "Weekly", "Occasional"]}
                optionsKey={"dogWalks"}
            />
            <Question
                question={"Does gardening brings you peace?"}
                questionKey={"gardening"}
                questionTwo={null}
                options={null}
                optionsKey={null}
            />
            <Question
                question={"Does taking a dip appeal to you? Tell us if you're into swimming!"}
                questionKey={"swimming"}
                questionTwo={"Fantastic! Where do you prefer to swim?"}
                options={["Backyard", "Public Pool", "Health Club Pool"]}
                optionsKey={"swimmingPlace"}
            />
            <Question
                question={"Do you enjoy coffee or tea breaks? A moment to relax and recharge."}
                questionKey={"coffeeTea"}
                questionTwo={"Sounds delightful! Where do you prefer these cozy breaks?"}
                options={["My Place", "Your Place", "Outdoors"]}
                optionsKey={"coffeeTeaPlace"}
            />
            <Question
                question={"Do you have a passion for art?"}
                questionKey={"art"}
                questionTwo={"What types intrigue you the most"}
                options={["Digital Art","Classic Paintings", "Modern Installations"]}
                optionsKey={"artType"}
            />
            <Question
                question={"Are you a fan of gathering around delicious food?"}
                questionKey={"foodGathering"}
                questionTwo={"Sounds delicious! Which type of food gathering do you enjoy the most"}
                options={["Potluck Parties", "Fine Dining", "Barbecue", "Cooking Classes"]}
                optionsKey={"foodGatheringType"}
            />
            <Question
                question={"Are you a sports enthusiast?"}
                questionKey={"sports"}
                questionTwo={"Which sports do you follow most passionately?"}
                options={["Football", "Basketball", "Cricket", "Any"]}
                optionsKey={"sportsType"}
            />
            <Question
                question={"Do movie nights sound like a perfect plan to you?"}
                questionKey={"movies"}
                questionTwo={"Great to hear! What types of movies captivate you the most?"}
                options={["Action and Adventure", "Comedy", "Romance", "Any"]}
                optionsKey={"movieType"}
            />
            <Question
                question={"Do you enjoy the idea of going shopping with your neighbors?"}
                questionKey={"shopping"}
                questionTwo={"Fantastic! What kind of shopping trips would you enjoy most?"}
                options={["Grocery", "Mall Outings", "Thrift Shopping", "Any"]}
                optionsKey={"shoppingType"}
            />
            <Question
                question={"Do you enjoy unwinding at happy hours?"}
                questionKey={"happyHours"}
                questionTwo={"Great to hear! What's your favorite way to spend happy hours?"}
                options={["Cocktail Lounges", "Outdoor Patios", "Local Pubs"]}
                optionsKey={"happyHoursType"}
            />
        </div>
    )
}

export default FirstStep