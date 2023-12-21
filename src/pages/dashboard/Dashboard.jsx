import { useEffect } from "react"
import Navbar from "../../components/navbar/Navbar"
import NavbarLink from "../../components/navbar/NavbarLink"
import ProfileCard from "../../components/profileCard/ProfileCard"
import SubHeading from "../../components/subHeading/SubHeading"
import useRedirectLoggedOutUsers from "../../customHooks/useRedirectLoggedOutUsers"
import { useDispatch, useSelector } from "react-redux"
import { SET_SIMILAR_USERS } from "../../redux/features/user/userSlice"
import axios from "axios"
import toast from "react-hot-toast"

const Dashboard = () => {

  document.title = "Dashboard - Neighborgood"
  useRedirectLoggedOutUsers()
  const token = window.localStorage.getItem('token')
  const dispatch = useDispatch()
  const { similarUsers } = useSelector(state => state.user)

  useEffect(() => {
    async function getUsers() {
      try {
        const { data } = await axios.get("/", { headers: { Authorization: `Token ${token}` } })
        dispatch(SET_SIMILAR_USERS(data?.users))
      } catch (error) {
        console.log(error);
        const message = error.response.data.message || error.message
        toast.error(message)
      }
    }
    getUsers()
  }, [dispatch, token])

  return (
    <div className="w-full min-h-screen bg-white dark:bg-slate-950 transition-none md:transition-colors duration-300 ease-linear" >
      <Navbar>
        <NavbarLink pageLink={true} path={"/"} name={"Home"} />
        <NavbarLink pageLink={true} path={"/profile"} name={"Profile"} />
      </Navbar>
      <div className="max-w-screen-2xl mx-auto px-4 md:px-10 py-24" >
        <SubHeading text="Similar" colorText="Users" afterText="" />
        <div className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 mt-10 " >
          {similarUsers?.map((user) => (
            <ProfileCard user={user} key={user?.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard