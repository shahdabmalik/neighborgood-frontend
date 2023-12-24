import Navbar from "../../components/navbar/Navbar"
import NavbarLink from "../../components/navbar/NavbarLink"
import profileImage from "../../assets/profile.svg"
import Activity from "./Activity";
import { useSelector } from "react-redux";
import useRedirectLoggedOutUsers from "../../customHooks/useRedirectLoggedOutUsers";
import ProfileSkeleton from "./ProfileSkeleton";

const Profile = () => {

    useRedirectLoggedOutUsers()
    const { user, authLoading } = useSelector(state => state.auth)
    document.title = `${user?.name} - Neighborgood` || "Profile - Neighborgood"

    return (
        <div className="w-full bg-white dark:bg-slate-950 transition-none md:transition-colors duration-300 ease-linear min-h-screen px-4 md:px-10" >
            <Navbar>
                <NavbarLink pageLink={true} path={"/"} name={"Home"} />
                <NavbarLink pageLink={true} path={"/dashboard"} name={"Dashboard"} />
            </Navbar>
            {!authLoading ? <div className="max-w-screen-lg mx-auto pt-32 pb-24" >
                <div className="flex flex-col md:flex-row gap-10 md:gap-5" >
                    <img className=" max-w-md md:max-w-[250px] lg:max-w-xs object-cover rounded-md border border-primary-light shadow-xl shadow-slate-200 dark:shadow-none" src={user?.profile || profileImage} alt="profile" />
                    <div className=" flex flex-col gap-4 px-4 pb-4 pt-2 flex-grow transition-none md:transition-colors duration-300 ease-linear" >
                        <div className="border-b pb-2 border-slate-300 dark:border-slate-700 transition-none md:transition-colors duration-300 ease-linear">
                            <h1 className="text-4xl font-semibold text-transparent bg-gradient-to-r to-primary-light from-primary-dark bg-clip-text inline-block" >{user?.name}</h1>
                        </div>
                        <div className="flex-grow flex flex-col gap-4 text-slate-700 dark:text-slate-300 transition-none md:transition-colors" >
                            <div className="flex items-center gap-4" ><span className="font-semibold text-slate-800 dark:text-slate-200" >Phone:</span> <span className="flex-grow text-sm" >{user?.mobile}</span></div>
                            <div className="flex items-center gap-4" ><span className="font-semibold text-slate-800 dark:text-slate-200" >Email:</span> <span className="flex-grow text-sm" >{user?.email}</span></div>
                            {/* <div className="flex gap-4 " ><span className="font-semibold basis-1/4 text-slate-800 dark:text-slate-200" >Address:</span> <span className="flex-grow text-sm" >232 Luettgen Rapid, Trantowborough, CA 44218-8638</span></div> */}
                        </div>
                    </div>
                </div>
                {user?.walking || user?.running || user?.stulfaftPark || user?.dogWalking || user?.gardening || user?.swimming || user?.coffeeTea || user?.art || user?.foodGatherings || user?.televisionSports || user?.movies || user?.shopping || user?.happyHours ?
                    <div className="mt-12 border p-4 pb-7 border-slate-300 dark:border-slate-700 shadow-xl shadow-slate-200 dark:shadow-none flex-grow rounded-md transition-none md:transition-colors duration-300 ease-linear" >
                        <h4 className="text-3xl font-semibold inline-block text-transparent bg-gradient-to-r from-primary-dark to-primary-light bg-clip-text" >Interests</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mt-4" >
                            {user?.walking && <Activity activityName={"Walking:"} activity={user?.walking} />}
                            {user?.running && <Activity activityName={"Running:"} activity={user?.running} />}
                            {user?.stulfaftPark && <Activity activityName={"Stulfaft Park:"} activity={user?.stulfaftPark} />}
                            {user?.dogWalking && <Activity activityName={"Dog Walking:"} activity={"Yes"} />}
                            {user?.gardening && <Activity activityName={"Gardening:"} activity={user?.gardening} />}
                            {user?.swimming && <Activity activityName={"Swimming:"} activity={user?.swimming} />}
                            {user?.coffeeTea && <Activity activityName={"Coffee / Tea Breaks:"} activity={user?.coffeeTea} />}
                            {user?.art && <Activity activityName={"Art:"} activity={user?.art} />}
                            {user?.foodGatherings && <Activity activityName={"Food Gatherings:"} activity={user?.foodGatherings} />}
                            {user?.televisionSports && <Activity activityName={"Television Sports:"} activity={user?.televisionSports} />}
                            {user?.movies && <Activity activityName={"Movies:"} activity={user?.movies} />}
                            {user?.shopping && <Activity activityName={"shopping:"} activity={user?.shopping} />}
                            {user?.happyHours && <Activity activityName={"Happy Hours:"} activity={user?.happyHours} />}
                        </div>
                    </div> : null
                }
                {user?.errands || user?.rides || user?.childcare || user?.eldercare || user?.petcare || user?.repairAdvice || user?.otherAdvice || user?.tutoring ?
                    <div className="mt-12 border p-4 pb-7 border-slate-300 dark:border-slate-700 shadow-xl shadow-slate-200 dark:shadow-none flex-grow rounded-md transition-none md:transition-colors duration-300 ease-linear" >
                        <h4 className="text-3xl font-semibold inline-block text-transparent bg-gradient-to-r from-primary-dark to-primary-light bg-clip-text" >Favours</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mt-4" >
                            {user?.errands && <Activity activityName={"Errands:"} activity={user?.errands} />}
                            {user?.rides && <Activity activityName={"Rides:"} activity={user?.rides} />}
                            {user?.childcare && <Activity activityName={"Childcare:"} activity={user?.childcare} />}
                            {user?.eldercare && <Activity activityName={"Eldercare:"} activity={user?.eldercare} />}
                            {user?.petcare && <Activity activityName={"Petcare:"} activity={user?.petcare} />}
                            {user?.repairAdvice && <Activity activityName={"Repair Advice:"} activity={user?.repairAdvice} />}
                            {user?.otherAdvice && <Activity activityName={"Other Advice:"} activity={user?.otherAdvice} />}
                            {user?.tutoring && <Activity activityName={"Tutoring:"} activity={user?.tutoring} />}
                        </div>
                    </div> : null
                }
            </div> : <ProfileSkeleton />}
        </div>

    )
}

export default Profile