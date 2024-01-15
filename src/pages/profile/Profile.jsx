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
                    <img className="w-full xs:max-w-xs md:max-w-[250px] aspect-square object-cover rounded-md border border-primary-light shadow-xl shadow-slate-200 dark:shadow-none" src={user?.picture || profileImage} alt="profile" />
                    <div className=" flex flex-col gap-4 px-4 pb-4 pt-2 flex-grow transition-none md:transition-colors duration-300 ease-linear" >
                        <div className="border-b pb-2 border-slate-300 dark:border-slate-700 transition-none md:transition-colors duration-300 ease-linear">
                            <h1 className="text-4xl font-semibold text-transparent bg-gradient-to-r to-primary-light from-primary-dark bg-clip-text inline-block" >{user?.name}</h1>
                        </div>
                        <div className="flex-grow flex flex-col gap-4 text-slate-700 dark:text-slate-300 transition-none md:transition-colors" >
                            {user?.mobile && user?.mobile !== "" && <div className="flex items-center gap-4" ><span className="font-semibold text-slate-800 dark:text-slate-200" >Phone:</span> <span className="flex-grow text-sm" >{user?.mobile}</span></div>}
                            <div className="flex items-center gap-4" ><span className="font-semibold text-slate-800 dark:text-slate-200" >Email:</span> <span className="flex-grow text-sm" >{user?.email}</span></div>
                            {/* <div className="flex gap-4 " ><span className="font-semibold basis-1/4 text-slate-800 dark:text-slate-200" >Address:</span> <span className="flex-grow text-sm" >232 Luettgen Rapid, Trantowborough, CA 44218-8638</span></div> */}
                        </div>
                    </div>
                </div>
                {user?.walking?.interested || user?.running?.interested || user?.dog?.interested || user?.gardening?.interested || user?.swimming?.interested || user?.coffeeTea?.interested || user?.art?.interested || user?.foodGathering?.interested || user?.sports?.interested || user?.movies?.interested || user?.shopping?.interested || user?.happyHours?.interested ?
                    <div className="mt-12 border p-4 pb-7 border-slate-300 dark:border-slate-700 shadow-xl shadow-slate-200 dark:shadow-none flex-grow rounded-md transition-none md:transition-colors duration-300 ease-linear" >
                        <h4 className="text-3xl font-semibold inline-block text-transparent bg-gradient-to-r from-primary-dark to-primary-light bg-clip-text" >Interests</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mt-4" >
                            {user?.walking?.interested && <Activity activityName={"Walking:"} activity={user?.walking?.details} />}
                            {user?.running?.interested && <Activity activityName={"Running:"} activity={user?.running?.details} />}
                            {user?.dog?.interested && <Activity activityName={"Dog Walking:"} activity={user?.dog?.details} />}
                            {user?.gardening?.interested && <Activity activityName={"Gardening:"} activity={user?.gardening?.details} />}
                            {user?.swimming?.interested && <Activity activityName={"Swimming:"} activity={user?.swimming?.details} />}
                            {user?.coffeeTea?.interested && <Activity activityName={"Coffee / Tea Breaks:"} activity={user?.coffeeTea?.details} />}
                            {user?.art?.interested && <Activity activityName={"Art:"} activity={user?.artType} />}
                            {user?.foodGathering?.interested && <Activity activityName={"Food Gatherings:"} activity={user?.foodGathering?.details} />}
                            {user?.sportsports?.interested && <Activity activityName={"Television Sports:"} activity={user?.sports?.details} />}
                            {user?.movies?.interested && <Activity activityName={"Movies:"} activity={user?.movies?.details} />}
                            {user?.shopping?.interested && <Activity activityName={"shopping:"} activity={user?.shopping?.details} />}
                            {user?.happyHours?.interested && <Activity activityName={"Happy Hours:"} activity={user?.happyHours?.details} />}
                        </div>
                    </div> : null
                }
                {user?.rides?.interested || user?.childcare?.interested || user?.eldercare?.interested || user?.petcare?.interested || user?.repairAdvice?.interested || user?.tutoring?.interested ?
                    <div className="mt-12 border p-4 pb-7 border-slate-300 dark:border-slate-700 shadow-xl shadow-slate-200 dark:shadow-none flex-grow rounded-md transition-none md:transition-colors duration-300 ease-linear" >
                        <h4 className="text-3xl font-semibold inline-block text-transparent bg-gradient-to-r from-primary-dark to-primary-light bg-clip-text" >Favours</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mt-4" >
                            {user?.rides?.interested && <Activity activityName={"Rides:"} activity={user?.rides?.details} />}
                            {user?.childcare?.interested && <Activity activityName={"Childcare:"} activity={user?.childcare?.details} />}
                            {user?.eldercare?.interested && <Activity activityName={"Eldercare:"} activity={user?.eldercare?.details} />}
                            {user?.petcare?.interested && <Activity activityName={"Petcare:"} activity={user?.petcare?.details} />}
                            {user?.repairAdvice?.interested && <Activity activityName={"Repair Advice:"} activity={user?.repairAdvice?.details} />}
                            {user?.tutoring?.interested && <Activity activityName={"Tutoring:"} activity={user?.tutoring?.details} />}
                        </div>
                    </div> : null
                }
            </div> : <ProfileSkeleton />}
        </div>

    )
}

export default Profile