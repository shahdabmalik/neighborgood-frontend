import { useState } from 'react';
import { IoMdMoon, IoMdSunny } from "react-icons/io";
// import { motion } from "framer-motion"

const DarkModeBtn = () => {

    let theme = window.localStorage.getItem('theme')
    const [darkMode, setDarkMode] = useState(theme)

    const handleDarkMode = () => {
        if (darkMode === "dark") {
            document.documentElement.classList.remove("dark")
            window.localStorage.setItem("theme", "light")
            setDarkMode("light")
        } else {
            document.documentElement.classList.add("dark")
            window.localStorage.setItem("theme", "dark")
            setDarkMode("dark")
        }
    }

    // const itemAni = {
    //     hidden: { opacity: 0, y: -10 },
    //     show: { opacity: 1, y: 0, transition: { duration: 0.25, } }
    // }


    return (
        <>
            <button onClick={handleDarkMode} type="button" className=" hover:text-primary dark:hover:text-white dark:text-primary-light focus:outline-none hidden md:block" >
                {darkMode === "light" ? <IoMdMoon size={22} /> : <IoMdSunny size={22} />}
            </button>
            <button onClick={handleDarkMode} type="button" className=" hover:text-primary dark:hover:text-white dark:text-primary-light focus:outline-none md:hidden" >
                {darkMode === "light" ? <IoMdMoon size={28} /> : <IoMdSunny size={28} />}
            </button>
        </>
    )
}

export default DarkModeBtn