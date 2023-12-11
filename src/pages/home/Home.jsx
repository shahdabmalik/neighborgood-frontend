import Navbar from "../../components/navbar/Navbar"
import NavbarLink from "../../components/navbar/NavbarLink"
import HeroSection from "./HeroSection"
import ServicesSection from "./ServicesSection"
import InfoSection from "./InfoSection"
import AboutSection from "./AboutSection"

const Home = () => {
    return (
        <div className=" w-full bg-white dark:bg-slate-950 transition-all duration-300 ease-linear">
            <div className="max-w-screen-2xl mx-auto min-h-screen px-4 md:px-10 overflow-hidden " >
                <Navbar>
                    <NavbarLink pageLink={true} path={"/"} name="Home" />
                    <NavbarLink pageLink={false} path={"#service"} name="Services" />
                    <NavbarLink pageLink={false} path={"#info"} name="Info" />
                    <NavbarLink pageLink={false} path={"#about"} name="About Us" />
                </Navbar>
                <HeroSection />
                <ServicesSection />
                <InfoSection />
                <AboutSection />
            </div>
        </div>
    )
}

export default Home