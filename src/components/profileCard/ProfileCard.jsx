import profileImage from "../../assets/profile.svg"
import { IoChatbubblesSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const ProfileCard = ({ user }) => {
    return (
        <div className="border-2 dark:border-2 border-slate-300 dark:border-slate-700 rounded-2xl shadow-lg md:shadow-xl hover:shadow-amber-200 hover:border-primary-light dark:hover:border-slate-600 dark:shadow-none overflow-hidden">
            <img className="aspect-4/3 w-full object-cover" src={user?.profile || profileImage} alt="profile" />
            <div className="bg-slate-100 dark:bg-slate-900 p-3 transition-none md:transition-colors duration-300 ease-linear" >
                <p className="text-2xl font-semibold text-color-brown dark:text-color-light transition-none md:transition-colors duration-300 ease-linear" >{user?.name}</p>
                <div className="flex gap-3 mt-4">
                    <button type="button" className="bg-primary-light hover:bg-primary p-2.5 rounded-full" ><IoChatbubblesSharp size={20} /></button>
                    <Link to={`/profile/${user?.id}`} className="bg-primary-light hover:bg-primary p-2.5 rounded-full" ><CgProfile size={20} /></Link>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard