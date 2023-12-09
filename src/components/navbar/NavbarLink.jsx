import { Link } from "react-router-dom"

const NavbarLink = ({ pageLink, path, name }) => {
    return (
        <>
            {pageLink ?
                <Link className="text-color-brown dark:text-color-light hover:text-primary dark:hover:text-primary-light transition-all font-semibold px-1" to={path} > {name}</Link>
                :
                <a className="text-color-brown dark:text-color-light hover:text-primary dark:hover:text-primary-light transition-all font-semibold px-1" href={path} > {name}</a>
            }
        </>
    )
}

export default NavbarLink