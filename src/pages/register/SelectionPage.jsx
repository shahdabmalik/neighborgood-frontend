import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import { FaWpforms } from "react-icons/fa";
import { RiChatSmile2Fill } from "react-icons/ri";
import useRedirectLoggedOutUsers from '../../customHooks/useRedirectLoggedOutUsers';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const SelectionPage = () => {

    useRedirectLoggedOutUsers()

    const navigate = useNavigate()
    const { user } = useSelector(state => state.auth)

    useEffect(() => {
        if (user?.interests_updated) {
            navigate("/dashboard")
        }
    }, [user, navigate])

    return (
        <div className='w-full bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 transition-none md:transition-colors relative' >
            <Navbar />
            <div className="max-w-screen-md mx-auto min-h-screen px-4 md:px-10 pt-32 md:pt-24 pb-12 flex items-center justify-center" >
                <div className='mb-20 sm:text-center' >
                    <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold text-primary' >Select Your Preferred Way to Share Interests</h1>
                    <p className='mt-3 sm:text-lg text-color-brown dark:text-color-light' >Everyone&apos;s different, and so is the way we like to share. Choose the method that feels right for you to tell us about your interests. Whether you prefer a straightforward form or an interactive chat with our AI</p>
                    <div className='mt-5 flex items-center sm:justify-center gap-4' >
                        <Link to="/interests" className='flex-grow sm:flex-grow-0 flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark dark:hover:bg-primary-light font-medium text-white dark:text-black px-4 py-2 rounded' ><FaWpforms size={16} /> Interests Form</Link>
                        <Link to="/chat" className='flex-grow sm:flex-grow-0 flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark dark:hover:bg-primary-light font-medium text-white dark:text-black px-4 py-2 rounded' ><RiChatSmile2Fill size={16} />A.I ChatBot</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectionPage