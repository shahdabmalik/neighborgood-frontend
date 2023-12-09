
const SubHeading = ({ text, colorText, afterText }) => {
    return (
        <h3 className="text-3xl sm:text-4xl font-bold  text-color-brown dark:text-color-light transition-all duration-300" >{text} <span className="inline-block bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent" >{colorText}</span> {afterText} </h3>
    )
}

export default SubHeading