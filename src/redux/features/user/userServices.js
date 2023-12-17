import axios from "axios";
import toast from "react-hot-toast";

const token = window.localStorage.getItem('token')
axios.defaults.headers.common['Authorization'] = `Token ${token}`;

export const getSimilarUser = async () => {
    try {
        const response = axios.get("/")
        return response.data
    } catch (error) {
        console.log(error);
        const message = error.response.data.message || error.message
        toast.error(message)
    }
}