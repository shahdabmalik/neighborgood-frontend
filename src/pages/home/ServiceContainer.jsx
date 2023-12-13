import { motion } from "framer-motion"

const ServiceContainer = ({ heading, body, image }) => {

    const itemAni = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }

    return (
        <motion.div variants={itemAni} className="border border-primary-light p-4 rounded-md shadow-xl" >
            <img src={image} alt="image" className="w-full rounded-md" />
            <div className="mt-3" >
                <h4 className="text-xl font-semibold text-color-brown dark:text-color-light">{heading}</h4>
                <p className="text-color-brown dark:text-color-light mt-1.5 opacity-80" >{body}</p>
            </div>
        </motion.div>
    )
}

export default ServiceContainer