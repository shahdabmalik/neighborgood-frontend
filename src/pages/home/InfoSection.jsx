import { Link } from "react-router-dom"
import infoImage from "../../assets/infoImage.webp"
import SubHeading from "../../components/subHeading/SubHeading"
import { motion } from "framer-motion"

const InfoSection = () => {

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
    <div className='py-24 flex flex-col-reverse lg:flex-row gap-16 lg:gap-8 xl:gap-32 items-center' id="info">
      <div className="w-full sm:max-w-lg lg:max-w-md">
        <motion.img
          variants={imageAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full" src={infoImage} alt='image' />
      </div>
      <div className="lg:basis-2/3 xl:basis-auto " >
        <SubHeading text="A Way For Neighbors to" colorText="Connect" afterText="" />
        <motion.div
          variants={containerAni}
          whileInView="show"
          initial="hidden"
          viewport={{ once: true }}
          className="mt-8 flex flex-col gap-4" >
          <motion.p variants={itemAni} className="text-color-brown dark:text-color-light">Neighborhood norms have evolved away from <b>spontaneous
            connections.</b></motion.p>
          <motion.p variants={itemAni} className="text-color-brown dark:text-color-light"> Today we prefer to screen our
            contacts online before meeting in person. We screen work colleagues using <b>LinkedIn</b>; we screen
            activity
            participants on <b>Facebook</b>; we screen <b>romance candidates</b> using online <b>dating services.</b>
          </motion.p>
          <motion.p variants={itemAni} className="text-color-brown dark:text-color-light">What&#39;s needed now is an app that lets us share specific info that
            we select, with <b>nearby neighbors</b> that we also select-just as we can do now on Linkedin, but for our social lives with nearby neighbors.</motion.p>

          <motion.p variants={itemAni} className="text-color-brown dark:text-color-light">Al can suggest <b>matches and activities</b>, making connection
            even <b>easier. LLMs</b> enable semantic
            understanding of wants and needs, allowing the neighborhood connector - formerly the local extrovert - to
            instead be an <b>Al agent.</b></motion.p>
          <motion.div variants={itemAni} ><Link to={"/register"} className="inline-block mt-8 px-5 py-2.5 bg-primary-light hover:bg-primary rounded-md transition-all font-medium " >Get Started</Link></motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default InfoSection