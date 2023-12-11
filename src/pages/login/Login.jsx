import Navbar from "../../components/navbar/Navbar"
import NavbarLink from "../../components/navbar/NavbarLink"
import loginImage from "../../assets/login.svg"
import { Link } from "react-router-dom"

const Login = () => {


    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className='w-full bg-white dark:bg-slate-950 transition-all duration-300 ease-linear' >
            <Navbar>
                <NavbarLink pageLink={true} path={"/"} name={"Home"} />
                <NavbarLink pageLink={true} path={"/register"} name={"Register"} />
            </Navbar>
            <div className="max-w-screen-2xl mx-auto min-h-screen flex items-center justify-center px-4 md:px-10" >
                <div className="flex justify-center w-full ">
                    <div className="max-w-[400px] h-[450px] w-full p-4 flex flex-col gap-4 shadow-xl bg-primary-light border border-primary-light rounded-md lg:rounded-e-none overflow-hidden" >
                        <h1 className="text-center text-4xl font-semibold " >Login</h1>
                        <form onSubmit={handleSubmit} className="flex-grow flex flex-col gap-4 justify-center">
                            <div className="flex flex-col gap-1.5 font-poppins" >
                                <label className="font-medium " >Email:</label>
                                <input type="email" name="email" className="h-9 rounded focus:outline-none p-2" />
                            </div>
                            <div className="flex flex-col gap-1.5 font-poppins" >
                                <label className="font-medium " >Password:</label>
                                <input type="password" name="password" className="h-9 rounded focus:outline-none p-2" />
                            </div>
                            <button type="submit" className="h-9 bg-white hover:bg-slate-100 mt-6 rounded font-semibold" >Login</button>
                        </form>
                        <p className="text-center" >Don&#39;t have an account? <Link className="font-semibold" to="/register">Register</Link> </p>
                    </div>
                    <div className=" hidden max-w-md w-full shadow-xl border border-primary-light rounded-e-md lg:flex items-center justify-center">
                        <img className=" w-full object-cover " src={loginImage} alt="login" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login