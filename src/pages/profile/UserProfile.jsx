import Navbar from "../../components/navbar/Navbar"
import NavbarLink from "../../components/navbar/NavbarLink"
import profileImage from "../../assets/profile.svg"
import { TbMessageCircle2Filled } from "react-icons/tb";
import Activity from "./Activity";
import useRedirectLoggedOutUsers from "../../customHooks/useRedirectLoggedOutUsers";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const UserProfile = () => {

    useRedirectLoggedOutUsers()
    const { id } = useParams()
    const [user, setUser] = useState(null)
    document.title = `${user?.name} - Neighborgood` || "Profile - Neighborgood"
    const token = window.localStorage.getItem('token')

    // Get user
    useEffect(() => {
        async function getUser() {
            try {
                const { data } = await axios.get(`/user/?id=${id}`, { headers: { Authorization: `Token ${token}` } })
                setUser(data.user)
            } catch (error) {
                console.log(error);
                const message = error.response.data.message || error.message
                toast.error(message)
            }
        }
        getUser()
    }, [id, token])

    return (
        <div className="w-full bg-white dark:bg-slate-950 transition-none md:transition-colors duration-300 ease-linear min-h-screen px-4 md:px-10" >
            <Navbar>
                <NavbarLink pageLink={true} path={"/"} name={"Home"} />
                <NavbarLink pageLink={true} path={"/dashboard"} name={"Dashboard"} />
            </Navbar>
            <div className="max-w-screen-lg mx-auto pt-32 pb-24" >
                <div className="flex flex-col md:flex-row gap-10 md:gap-5 lg:gap-10" >
                    <img className=" max-w-md md:max-w-[250px] lg:max-w-xs object-cover rounded-md border border-primary-light shadow-xl shadow-slate-200 dark:shadow-none" src={user?.profile || profileImage} alt="profile" />
                    <div className=" flex flex-col gap-4 px-4 pb-4 pt-2 border border-slate-300 dark:border-slate-700 shadow-xl shadow-slate-200 dark:shadow-none flex-grow rounded-md transition-none md:transition-colors duration-300 ease-linear" >
                        <div className="border-b pb-2 border-slate-300 dark:border-slate-700 transition-none md:transition-colors duration-300 ease-linear">
                            <h1 className="text-4xl font-semibold text-transparent bg-gradient-to-r to-primary-light from-primary-dark bg-clip-text inline-block" >{user?.name}</h1>
                        </div>
                        {user?.shareDetails &&
                            <div className="flex-grow flex flex-col justify-center gap-4 text-slate-700 dark:text-slate-300 transition-none md:transition-colors duration-300 ease-linear" >
                                <div className="flex xs:gap-4 items-center" ><span className="font-semibold basis-1/4 text-slate-800 dark:text-slate-200" >Phone:</span> <span className="flex-grow text-sm" >{user?.mobile}</span></div>
                                <div className="flex xs:gap-4 items-center" ><span className="font-semibold basis-1/4 text-slate-800 dark:text-slate-200" >Email:</span> <span className="flex-grow text-sm" >{user?.email}</span></div>
                                {/* <div className="flex gap-4 " ><span className="font-semibold basis-1/4 text-slate-800 dark:text-slate-200" >Address:</span> <span className="flex-grow text-sm" >232 Luettgen Rapid, Trantowborough, CA 44218-8638</span></div> */}
                            </div>
                        }
                        <div className=" " >
                            <button type="button" className=" w-full flex gap-2 justify-center rounded font-semibold text-black bg-primary-light hover:bg-primary transition-none md:transition-colors items-center border border-primary-light px-4 py-2" >Message <TbMessageCircle2Filled size={20} /></button>
                        </div>
                    </div>
                </div>
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
                </div>
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
                </div>
            </div>
        </div>
    )
}

export default UserProfile