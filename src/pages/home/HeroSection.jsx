import { Link } from "react-router-dom"
import heroImage from "../../assets/heroImage.png"

const HeroSection = () => {
    return (
        <div className="min-h-screen flex gap-12 md:gap-4 flex-col justify-center items-center sm:pb-12" >
            <div className="max-w-5xl" > <img className="w-full" src={heroImage} alt="image" /></div>
            <div className="text-center" >
                <h1 className="text-5xl h-16 sm:text-6xl sm:h-20 font-bold inline-block bg-gradient-to-r from-primary-light to-primary-dark text-transparent bg-clip-text" >Neighborgood</h1>
                <p className="text-color-brown dark:text-color-light lg:w-[70%] mx-auto" >NeighborGood is on a mission to provide the simplest platform for neighborhoods to form connections & community. We are going after this by creating an AI agent that acts as the highly-social extrovert neighbor who finds symbiotic activities for people to do together.</p>
                <Link to={"/form"} className="inline-block mt-5 px-5 py-2.5 bg-primary-light hover:bg-primary rounded-md transition-all font-medium " >Get Started</Link>
            </div>
        </div>
    )
}

export default HeroSection