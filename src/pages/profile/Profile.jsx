import Navbar from "../../components/navbar/Navbar"
import NavbarLink from "../../components/navbar/NavbarLink"
import profileImage from "../../assets/profile.svg"
import { TbMessageCircle2Filled } from "react-icons/tb";
import Activity from "./Activity";

const Profile = () => {

    document.title = "Profile - Neighborgood"

    return (
        <div className="w-full bg-white dark:bg-slate-950 transition-none md:transition-colors duration-300 ease-linear min-h-screen px-4 md:px-10" >
            <Navbar>
                <NavbarLink pageLink={true} path={"/"} name={"Home"} />
                <NavbarLink pageLink={true} path={"/dashboard"} name={"Dashboard"} />
            </Navbar>
            <div className="max-w-screen-lg mx-auto pt-32 pb-24" >
                <div className="flex flex-col md:flex-row gap-10 md:gap-5 lg:gap-10" >
                    <img className=" max-w-md md:max-w-[250px] lg:max-w-xs object-cover rounded-md border border-primary-light shadow-xl shadow-slate-200 dark:shadow-none" src={profileImage} alt="profile" />
                    <div className=" flex flex-col gap-4 px-4 pb-4 pt-2 border border-slate-300 dark:border-slate-700 shadow-xl shadow-slate-200 dark:shadow-none flex-grow rounded-md transition-none md:transition-colors duration-300 ease-linear" >
                        <div className="border-b pb-2 border-slate-300 dark:border-slate-700 transition-none md:transition-colors duration-300 ease-linear">
                            <h1 className="text-4xl font-semibold text-transparent bg-gradient-to-r to-primary-light from-primary-dark bg-clip-text inline-block" >John Cena</h1>
                            <p className="mt-1 text-sm text-slate-700 dark:text-slate-300 transition-none md:transition-colors duration-300 ease-linear" >Similarity: 73.5% </p>
                        </div>
                        <div className="flex-grow flex flex-col justify-center gap-4 text-slate-700 dark:text-slate-300 transition-none md:transition-colors duration-300 ease-linear" >
                            <div className="flex xs:gap-4 items-center" ><span className="font-semibold basis-1/4 text-slate-800 dark:text-slate-200" >Phone:</span> <span className="flex-grow text-sm" >+1 1234456649</span></div>
                            <div className="flex xs:gap-4 items-center" ><span className="font-semibold basis-1/4 text-slate-800 dark:text-slate-200" >Email:</span> <span className="flex-grow text-sm" >johncena512@gmail.com</span></div>
                            <div className="flex gap-4 " ><span className="font-semibold basis-1/4 text-slate-800 dark:text-slate-200" >Address:</span> <span className="flex-grow text-sm" >232 Luettgen Rapid, Trantowborough, CA 44218-8638</span></div>
                        </div>
                        <div className=" " >
                            <button type="button" className=" w-full flex gap-2 justify-center rounded font-semibold text-black bg-primary-light hover:bg-primary transition-none md:transition-colors items-center border border-primary-light px-4 py-2" >Message <TbMessageCircle2Filled size={20} /></button>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border p-4 pb-7 border-slate-300 dark:border-slate-700 shadow-xl shadow-slate-200 dark:shadow-none flex-grow rounded-md transition-none md:transition-colors duration-300 ease-linear" >
                    <h4 className="text-3xl font-semibold inline-block text-transparent bg-gradient-to-r from-primary-dark to-primary-light bg-clip-text" >Interests</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mt-4" >
                        <Activity activityName={"Walking:"} activity={"Moderate"} />
                        <Activity activityName={"Running:"} activity={"Slow"} />
                        <Activity activityName={"Stulfaft Park:"} activity={"Slow"} />
                        <Activity activityName={"Dog Walking:"} activity={"Yes"} />
                        <Activity activityName={"Gardening:"} activity={"Fruits / Veggies"} />
                        <Activity activityName={"Swimming:"} activity={"Backyard"} />
                        <Activity activityName={"Quick Coffee / Tea Break:"} activity={"My Place"} />
                        <Activity activityName={"Art:"} activity={"Drawing"} />
                        <Activity activityName={"Food Gatherings:"} activity={"BBQs"} />
                        <Activity activityName={"Telivision Sports:"} activity={"Football"} />
                        <Activity activityName={"Shopping:"} activity={"Any"} />
                        <Activity activityName={"Happy Hours:"} activity={"Monthly"} />
                    </div>
                </div>
                <div className="mt-12 border p-4 pb-7 border-slate-300 dark:border-slate-700 shadow-xl shadow-slate-200 dark:shadow-none flex-grow rounded-md transition-none md:transition-colors duration-300 ease-linear" >
                    <h4 className="text-3xl font-semibold inline-block text-transparent bg-gradient-to-r from-primary-dark to-primary-light bg-clip-text" >Favours</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mt-4" >
                        <Activity activityName={"Errands:"} activity={"Regular"} />
                        <Activity activityName={"Rides:"} activity={"Ocassional"} />
                        <Activity activityName={"Childcare:"} activity={"Emergrncies"} />
                        <Activity activityName={"Eldercare:"} activity={"Emergencies"} />
                        <Activity activityName={"Petcare:"} activity={"Ocassional"} />
                        <Activity activityName={"Repair Advice"} activity={"Home"} />
                        <Activity activityName={"Other Advice:"} activity={"Computer"} />
                        <Activity activityName={"Tutoring:"} activity={"Science"} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Profile