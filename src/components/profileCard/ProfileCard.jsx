import profileImage from "../../assets/profile.svg"
import { IoChatbubblesSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const ProfileCard = ({ name, similarity }) => {
    return (
        <div className="border dark:border-2 border-slate-300 dark:border-slate-700 rounded-2xl shadow-lg md:shadow-xl hover:shadow-amber-200 hover:border-primary-light dark:hover:border-slate-600 dark:shadow-none transition-all duration-300 ease-linear overflow-hidden">
            <img className="aspect-4/3 w-full object-cover" src={profileImage} alt="profile" />
            <div className="bg-slate-100 dark:bg-slate-900 p-3 transition-all duration-300 ease-linear" >
                <p className="text-2xl font-semibold text-color-brown dark:text-color-light transition-all duration-300 ease-linear" >{name}</p>
                <p className="text-color-brown dark:text-color-light mt-1 text-xs transition-all duration-300 ease-linear" >Similarity: {similarity}%</p>
                <div className="flex gap-3 mt-4">
                    <button type="button" className="bg-primary-light hover:bg-primary p-2.5 rounded-full" ><IoChatbubblesSharp size={20} /></button>
                    <Link to="/profile/:id" className="bg-primary-light hover:bg-primary p-2.5 rounded-full" ><CgProfile size={20} /></Link>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard