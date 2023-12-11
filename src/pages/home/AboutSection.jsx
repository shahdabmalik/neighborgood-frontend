import SubHeading from "../../components/subHeading/SubHeading"
import aboutImage from "../../assets/about.png"
import { motion } from "framer-motion"

const AboutSection = () => {

    const imageAnimation = {
        hidden: { opacity: 0, scale: 1.2 },
        show: { opacity: 1, scale: 1, transition: { duration: 0.75, delay: 0.5 } }
    }

    const containerAni = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.15, duration: 0.5, delayChildren: 0.75 } }
    }
    const itemAni = {
        hidden: { opacity: 0, },
        show: { opacity: 1, transition: { duration: 0.5 } },
    }

    return (
        <div className='py-24 flex flex-col-reverse lg:flex-row-reverse gap-16 xl:gap-32 items-center' id="about">
            <div className="w-md sm:max-w-lg lg:max-w-md">
                <motion.img
                    variants={imageAnimation}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once:true}}
                    className="w-full" src={aboutImage} alt='image' />
            </div>
            <div>
                <SubHeading text="" colorText="About" afterText="Us" />
                <motion.div
                    variants={containerAni}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once:true}}
                    className="mt-8 flex flex-col gap-4" >
                    <motion.p variants={itemAni} className="text-color-brown dark:text-color-light" ><b>NeighborGood</b> is on a mission to provide the simplest
                        platform for neighborhoods to form connections
                        &
                        community. We are going after this by creating an <b>Al agent</b> that acts as the <b>highly-social
                            extrovert</b> neighbor who finds <b>symbiotic activities</b> for people to do together.</motion.p>
                    <motion.p variants={itemAni} className="text-color-brown dark:text-color-light" >We offer users the ability to screen potential nearby connections
                        and arrange shared <b>face-to-face
                            activities.</b> Our team previously founded <b>Foresight Institute, Persist Ventures, & Systemic
                                Altruism.</b>
                    </motion.p>
                </motion.div>
            </div>
        </div>
    )
}

export default AboutSection