import axios from "axios";
import toast from "react-hot-toast";

const token = window.localStorage.getItem('token')
axios.defaults.headers.common['Authorization'] = `Token ${token}`;

// get similar user function
export const getSimilarUser = async () => {
    try {
        const response = await axios.get("/")
        return response.data
    } catch (error) {
        console.log(error);
        const message = error.response.data.message || error.message
        toast.error(message)
    }
}

// get single user
export const getSingleUser = async (id) => {
    try {
        const response = await axios.get(`/${id}`)
        return response.data
    } catch (error) {
        console.log(error);
        const message = error.response.data.message || error.message
        toast.error(message)
    }
}