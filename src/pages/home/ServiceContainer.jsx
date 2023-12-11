import { motion } from "framer-motion"

const ServiceContainer = ({ heading, body }) => {

    const itemAni = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }

    return (
        <motion.div variants={itemAni} className="border border-primary-light p-4 rounded-md" >
            <h4 className="text-2xl font-medium text-color-brown dark:text-color-light">{heading}</h4>
            <p className="text-color-brown dark:text-color-light mt-3 opacity-80" >{body}</p>
        </motion.div>
    )
}

export default ServiceContainer