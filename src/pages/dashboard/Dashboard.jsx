import Navbar from "../../components/navbar/Navbar"
import NavbarLink from "../../components/navbar/NavbarLink"
import ProfileCard from "../../components/profileCard/ProfileCard"
import SubHeading from "../../components/subHeading/SubHeading"

const Dashboard = () => {

  document.title = "Dashboard - Neighborgood"

  return (
    <div className="w-full min-h-screen bg-white dark:bg-slate-950 transition-all duration-300 ease-linear" >
      <Navbar>
        <NavbarLink pageLink={true} path={"/"} name={"Home"} />
        <NavbarLink pageLink={true} path={"/profile"} name={"Profile"} />
      </Navbar>
      <div className="max-w-screen-2xl mx-auto px-4 md:px-10 py-24" >
      <SubHeading text="Similar" colorText="Users" afterText="" />
        <div className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 mt-10 " >
          <ProfileCard name={"John"} similarity={"72.5"} />
          <ProfileCard name={"Anthony"} similarity={"81.7"} />
          <ProfileCard name={"Clair"} similarity={"77.9"} />
          <ProfileCard name={"Jane"} similarity={"65.4"} />
          <ProfileCard name={"Chris"} similarity={"82.1"} />
          <ProfileCard name={"Daemon"} similarity={"87.5"} />
          <ProfileCard name={"Albert"} similarity={"92.1"} />
          <ProfileCard name={"Wells"} similarity={"78.5"} />
          <ProfileCard name={"Mavrick"} similarity={"69.5"} />
          <ProfileCard name={"Rock"} similarity={"71.5"} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard