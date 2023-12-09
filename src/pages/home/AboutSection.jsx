import SubHeading from "../../components/subHeading/SubHeading"
import aboutImage from "../../assets/about.png"

const AboutSection = () => {
    return (
        <div className='py-24 flex flex-col-reverse lg:flex-row-reverse gap-16 xl:gap-32 items-center' id="about">
            <div className="w-md sm:max-w-lg lg:max-w-md"><img className="w-full" src={aboutImage} alt='image' /></div>
            <div>
                <SubHeading text="" colorText="About" afterText="Us" />
                <div className="mt-8 flex flex-col gap-4" >
                    <p className="text-color-brown dark:text-color-light" ><b>NeighborGood</b> is on a mission to provide the simplest
                        platform for neighborhoods to form connections
                        &
                        community. We are going after this by creating an <b>Al agent</b> that acts as the <b>highly-social
                            extrovert</b> neighbor who finds <b>symbiotic activities</b> for people to do together.</p>
                    <p className="text-color-brown dark:text-color-light" >We offer users the ability to screen potential nearby connections
                        and arrange shared <b>face-to-face
                            activities.</b> Our team previously founded <b>Foresight Institute, Persist Ventures, & Systemic
                                Altruism.</b>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutSection