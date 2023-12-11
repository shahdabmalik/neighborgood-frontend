import { motion } from "framer-motion"

const SubHeading = ({ text, colorText, afterText }) => {

    const headingAni = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { delay: 0.5, duration: 1 } }
    }

    return (
        <motion.h3 variants={headingAni} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold  text-color-brown dark:text-color-light transition-all duration-300" >{text} <span className="inline-block bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent" >{colorText}</span> {afterText} </motion.h3>
    )
}

export default SubHeading