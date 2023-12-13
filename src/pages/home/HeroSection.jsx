import { Link } from "react-router-dom"
import heroImage from "../../assets/heroImage.webp"
import { motion } from "framer-motion"

const HeroSection = () => {

    // Framer motion animation
    const imageAnimation = {
        hidden: { opacity: 0, scale: 1.2 },
        show: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.5 } }
    }
    const containerAni = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.75 } }
    }
    const itemAni = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.35 } }
    }
    return (
        <div className="min-h-screen flex gap-12 md:gap-4 flex-col justify-center items-center overflow-hidden" >
            <div className=" max-w-3xl 2xl:max-w-5xl" >
                <motion.img
                    variants={imageAnimation}
                    initial="hidden"
                    animate="show"
                    className="w-full" src={heroImage} alt="image" />
            </div>
            <motion.div
                variants={containerAni}
                initial="hidden"
                animate="show"
                className="text-center" >
                <motion.h1 variants={itemAni} className="text-4xl h-12 sm:text-5xl sm:h-16 2xl:text-6xl 2xl:h-20 font-bold inline-block bg-gradient-to-r from-primary-light to-primary-dark text-transparent bg-clip-text" >Neighborgood</motion.h1>
                <motion.p variants={itemAni} className="text-color-brown dark:text-color-light lg:w-[70%] mx-auto" >NeighborGood is on a mission to provide the simplest platform for neighborhoods to form connections & community. We are going after this by creating an AI agent that acts as the highly-social extrovert neighbor who finds symbiotic activities for people to do together.</motion.p>
                <motion.div variants={itemAni}> <Link to={"/register"} className="inline-block mt-5 px-5 py-2.5 bg-primary-light hover:bg-primary rounded-md transition-all font-medium " >Get Started</Link></motion.div>
            </motion.div>
        </div>
    )
}

export default HeroSection