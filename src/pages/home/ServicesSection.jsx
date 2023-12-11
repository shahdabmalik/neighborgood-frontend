import SubHeading from '../../components/subHeading/SubHeading'
import ServiceContainer from './ServiceContainer'
import { motion } from "framer-motion"

const ServicesSection = () => {

    const containerAni = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.5, duration: 0.5 } }
    }

    return (
        <div className='py-24 overflow-hidden' id='service' >
            <SubHeading text="Our" colorText="Services" afterText="" />
            <motion.div
                variants={containerAni}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className=' mt-8 grid gap-6 grid-cols-1 md:grid-cols-2'>
                <ServiceContainer
                    heading="Connect, Discover, Attend: Meet Your Neighbors!"
                    body="Find your perfect match based on shared interests and hobbies, with our interest matching service – because compatibility goes beyond looks!"
                />
                <ServiceContainer
                    heading="Build Your Neighbors Network, Join Now!"
                    body="Want to create a killer online profile that stands out from the crowd? Our Profile Creation service will help you create a captivating and unique profile that gets you noticed!"
                />
                <ServiceContainer
                    heading="Connect with Neighbors, Discover Local Events"
                    body="Looking for something fun to do? Our event discovery service helps you find the hottest concerts, festivals, and parties in your area, so you never miss out on the fun!"
                />
                <ServiceContainer
                    heading="Get help around you"
                    body="The platform facilitates carpooling, baby nursing, and food stall discovery, optimizing savings in time and expenses."
                />
            </motion.div>
        </div>
    )
}

export default ServicesSection