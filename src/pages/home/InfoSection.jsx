import { Link } from "react-router-dom"
import infoImage from "../../assets/infoImage.png"
import SubHeading from "../../components/subHeading/SubHeading"

const InfoSection = () => {
  return (
    <div className='py-24 flex flex-col-reverse lg:flex-row gap-16 xl:gap-32 items-center' id="info">
      <div className="w-md sm:max-w-lg lg:max-w-md"><img className="w-full" src={infoImage} alt='image' /></div>
      <div>
        <SubHeading text="A Way For Neighbors to" colorText="Connect" afterText="" />
        <div className="mt-8 flex flex-col gap-4" >
          <p className="text-color-brown dark:text-color-light">Neighborhood norms have evolved away from <b>spontaneous
            connections.</b> Today we prefer to screen our
            contacts online before meeting in person. We screen work colleagues using <b>LinkedIn</b>; we screen
            activity
            participants on <b>Facebook</b>; we screen <b>romance candidates</b> using online <b>dating services.</b>
          </p>
          <p className="text-color-brown dark:text-color-light">What&#39;s needed now is an app that lets us share specific info that
            we select, with <b>nearby neighbors</b>
            that we also select-just as we can do now on Linkedin, but for our social lives with nearby neighbors.</p>

          <p className="text-color-brown dark:text-color-light">Al can suggest <b>matches and activities</b>, making connection
            even <b>easier. LLMs</b> enable semantic
            understanding of wants and needs, allowing the neighborhood connector - formerly the local extrovert - to
            instead be an <b>Al agent.</b></p>
        </div>
        <Link to={"/form"} className="inline-block mt-8 px-5 py-2.5 bg-primary-light hover:bg-primary rounded-md transition-all font-medium " >Get Started</Link>
      </div>
    </div>
  )
}

export default InfoSection