import axios from "axios"

const fetchData = async (data, endpoint) => {
    try {
        const response = await axios.post(endpoint, data);
        console.log("Response data:", response.data); // Log the response data
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export { fetchData }



