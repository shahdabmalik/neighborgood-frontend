
const ServiceContainer = ({ heading, body }) => {
    return (
        <div className="border border-primary-light p-4 rounded-md" >
            <h4 className="text-2xl font-medium text-color-brown dark:text-color-light">{heading}</h4>
            <p className="text-color-brown dark:text-color-light mt-3 opacity-80" >{body}</p>
        </div>
    )
}

export default ServiceContainer