import axios from "axios"
import toast from "react-hot-toast";

// register user
export const registerUser = async (data) => {
    try {
        const response = await axios.post("/", JSON.stringify(data))
        return response.data
    } catch (error) {
        console.log(error);
        const message = error.response.data.message || error.message
        toast.error(message)
    }
}
// login user
export const loginUser = async (data) => {
    try {
        const response = await axios.post("/", JSON.stringify(data))
        return response.data
    } catch (error) {
        console.log(error);
        const message = error.response.data.message || error.message
        toast.error(message)
    }
}